import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import candidateData from '../data/candidateData.json';
import './QueryFormModal.css';

const QueryFormModal = ({ isOpen, onClose }) => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    problem: '',
    area: ''
  });
  const [errors, setErrors] = useState({});

  const ward = candidateData.ward;
  const lang = language;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.problem.trim()) {
      newErrors.problem = t('queryForm.required');
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Generate WhatsApp message
    const message = generateWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = candidateData.whatsappNumber;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      mobile: '',
      problem: '',
      area: ''
    });
    
    // Close modal after a short delay
    setTimeout(() => {
      onClose();
    }, 500);
  };

  const generateWhatsAppMessage = () => {
    const areaText = formData.area || ward.areas[lang].join(', ');
    const wardText = `${t('ward.wardNumber')}: ${ward.number}`;
    
    let message = `*${t('queryForm.title')}*\n\n`;
    
    if (formData.name) {
      message += `*${t('queryForm.name')}:* ${formData.name}\n`;
    }
    
    if (formData.mobile) {
      message += `*${t('queryForm.mobile')}:* ${formData.mobile}\n`;
    }
    
    message += `*${t('queryForm.problem')}:*\n${formData.problem}\n\n`;
    message += `*${t('queryForm.area')}:* ${areaText}\n`;
    message += `*${wardText}*\n\n`;
    message += `---\n${t('contact.officeTitle')}`;
    
    return message;
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{t('queryForm.title')}</h2>
          <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        </div>
        
        <form onSubmit={handleSubmit} className="query-form">
          <div className="form-group">
            <label htmlFor="name">{t('queryForm.name')}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t('queryForm.name')}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="mobile">{t('queryForm.mobile')}</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder={t('queryForm.mobile')}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="area">{t('queryForm.area')}</label>
            <select
              id="area"
              name="area"
              value={formData.area}
              onChange={handleChange}
            >
              <option value="">{t('queryForm.area')}</option>
              {ward.areas[lang].map((area, index) => (
                <option key={index} value={area}>{area}</option>
              ))}
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="problem">
              {t('queryForm.problem')} <span className="required">*</span>
            </label>
            <textarea
              id="problem"
              name="problem"
              value={formData.problem}
              onChange={handleChange}
              placeholder={t('queryForm.problem')}
              rows="5"
              required
            />
            {errors.problem && <span className="error-message">{errors.problem}</span>}
          </div>
          
          <p className="form-disclaimer">{t('queryForm.disclaimer')}</p>
          
          <div className="form-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>
              {t('queryForm.close')}
            </button>
            <button type="submit" className="btn-primary">
              {t('queryForm.submit')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QueryFormModal;


