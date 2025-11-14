"use client";
import React, { useState } from 'react';

const FormArea = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: null, message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error message when user starts typing
        if (submitStatus.type === 'error') {
            setSubmitStatus({ type: null, message: '' });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Basic validation
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setSubmitStatus({
                type: 'error',
                message: 'Please fill in all required fields (Name, Email, and Message).'
            });
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setSubmitStatus({
                type: 'error',
                message: 'Please enter a valid email address.'
            });
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setSubmitStatus({
                    type: 'success',
                    message: data.message || 'Your message has been sent successfully! We will get back to you soon.'
                });
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                setSubmitStatus({
                    type: 'error',
                    message: data.error || 'Failed to send message. Please try again later.'
                });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus({
                type: 'error',
                message: 'An error occurred. Please try again later or contact us directly.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {submitStatus.message && (
                <div className={`mb-25 p-3 ${submitStatus.type === 'success' ? 'text-success' : 'text-danger'}`} 
                     style={{
                         backgroundColor: submitStatus.type === 'success' ? '#d4edda' : '#f8d7da',
                         border: `1px solid ${submitStatus.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`,
                         borderRadius: '5px'
                     }}>
                    {submitStatus.message}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6 mb-25">
                        <div className="contact__form-area-item">
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Full Name" 
                                required 
                                value={formData.name}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                        </div>
                    </div>
                    <div className="col-md-6 md-mb-25">
                        <div className="contact__form-area-item">
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Email Address" 
                                required 
                                value={formData.email}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                        </div>
                    </div>
                    <div className="col-md-12 mb-25">
                        <div className="contact__form-area-item">
                            <input 
                                type="text" 
                                name="subject" 
                                placeholder="Subject" 
                                value={formData.subject}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                        </div>
                    </div>
                    <div className="col-md-12 mb-25">
                        <div className="contact__form-area-item">
                            <textarea 
                                name="message" 
                                placeholder="Message" 
                                required
                                value={formData.message}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                rows="5"
                            ></textarea>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="contact__form-area-item">
                            <button 
                                className="build_button" 
                                type="submit"
                                disabled={isSubmitting}
                                style={{ opacity: isSubmitting ? 0.6 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                            >
                                {isSubmitting ? 'Sending...' : 'Submit Message'} 
                                {!isSubmitting && <i className="flaticon-right-up"></i>}
                            </button>
                        </div>
                    </div>
                </div>
            </form>          
        </>
    );
};

export default FormArea;