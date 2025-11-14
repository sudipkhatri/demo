"use client";
import React, { useState } from 'react';

const RequestQuoteMain = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		company: '',
		website: '',
		services: [],
		message: ''
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState({ type: null, message: '' });

	const serviceOptions = [
		'Demolition and Strip Out',
		'Labour Hire',
		'Floor Grinding',
		'Waste Management',
		'Contract and Final Cleaning',
		'Property Maintenance',
		'Multiple Services',
		'Emergency Service',
		'Ongoing Maintenance'
	];

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

	const handleServiceChange = (service) => {
		setFormData(prev => {
			const services = prev.services.includes(service)
				? prev.services.filter(s => s !== service)
				: [...prev.services, service];
			return { ...prev, services };
		});
		// Clear error message when user selects a service
		if (submitStatus.type === 'error') {
			setSubmitStatus({ type: null, message: '' });
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		
		// Basic validation
		if (!formData.firstName.trim() || !formData.email.trim() || !formData.phone.trim() || 
			!formData.company.trim() || !formData.website.trim() || !formData.message.trim()) {
			setSubmitStatus({
				type: 'error',
				message: 'Please fill in all required fields.'
			});
			return;
		}

		// Services validation
		if (formData.services.length === 0) {
			setSubmitStatus({
				type: 'error',
				message: 'Please select at least one service.'
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

		// Website validation (basic URL check)
		const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
		if (!urlRegex.test(formData.website)) {
			setSubmitStatus({
				type: 'error',
				message: 'Please enter a valid website URL.'
			});
			return;
		}

		setIsSubmitting(true);
		setSubmitStatus({ type: null, message: '' });

		try {
			const response = await fetch('/api/request-quote', {
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
					message: data.message || 'Your quote request has been submitted successfully! We will contact you soon.'
				});
				// Reset form
				setFormData({
					firstName: '',
					lastName: '',
					email: '',
					phone: '',
					company: '',
					website: '',
					services: [],
					message: ''
				});
			} else {
				setSubmitStatus({
					type: 'error',
					message: data.error || 'Failed to submit quote request. Please try again later.'
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
			<div className="request__quote section-padding-three">
				<div className="container">
					<div className="row">
						<div className="col-lg-5 lg-mb-30">
							<div className="contact__area-left mr-40 xl-mr-0">
								<div className="title">
									<span className="subtitle wow fadeInLeft" data-wow-delay=".4s">Get a Quote</span>
									<h2 className="title_split_anim mb-25">Request Your Quote</h2>
									<p className="wow fadeInUp" data-wow-delay=".4s">Fill out the form to receive a detailed quote for your property service needs. Our team will review your requirements and provide you with a comprehensive proposal tailored to your project across Sydney, Central Coast, and Wollongong.</p>
								</div>
								<div className="contact__area-left-contact wow fadeInUp" data-wow-delay=".7s">
									<div className="contact__area-left-contact-item">
										<div className="contact__area-left-contact-item-icon">
											<i className="flaticon-phone"></i>
										</div>
										<div className="contact__area-left-contact-item-content">
											<span>Phone:</span>
											<h6><a href="tel:+61414603059">+61 414 603 059</a></h6>
										</div>
									</div>
									<div className="contact__area-left-contact-item">
										<div className="contact__area-left-contact-item-icon">
											<i className="flaticon-email-3"></i>
										</div>
										<div className="contact__area-left-contact-item-content">
											<span>Email Address:</span>
											<h6><a href="mailto:info@sharplinesolutions.com.au">info@sharplinesolutions.com.au</a></h6>
										</div>
									</div>
									<div className="contact__area-left-contact-item">
										<div className="contact__area-left-contact-item-icon">
											<i className="flaticon-location-1"></i>
										</div>
										<div className="contact__area-left-contact-item-content">
											<span>Coverage:</span>
											<h6>Sydney, Central Coast, and Wollongong</h6>
										</div>
									</div>
									<div className="contact__area-left-contact-item">
										<div className="contact__area-left-contact-item-icon">
											<i className="fab fa-whatsapp"></i>
										</div>
										<div className="contact__area-left-contact-item-content">
											<span>WhatsApp:</span>
											<h6><a href="https://wa.me/61414603059" target="_blank" rel="noopener noreferrer">+61 414 603 059</a></h6>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-7 wow fadeInRight" data-wow-delay=".4s">
							<div className="request__quote-form">
							{submitStatus.message && (
								<div className={`mb-30 p-3 ${submitStatus.type === 'success' ? 'text-success' : 'text-danger'}`} 
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
									<div className="col-md-6 mt-30">
										<div className="request__quote-item">
											<label>First Name<span> *</span></label>
											<input 
												type="text" 
												name="firstName" 
												placeholder="First" 
												required
												value={formData.firstName}
												onChange={handleChange}
												disabled={isSubmitting}
											/>
										</div>
									</div>
									<div className="col-md-6 mt-30">
										<div className="request__quote-item">
											<label>Last Name</label>
											<input 
												type="text" 
												name="lastName"
												placeholder="Last" 
												value={formData.lastName}
												onChange={handleChange}
												disabled={isSubmitting}
											/>
										</div>
									</div>
									<div className="col-md-6 mt-30">
										<div className="request__quote-item">
											<label>Email Address<span> *</span></label>
											<input 
												type="email" 
												name="email"
												placeholder="info@sharplinesolutions.com.au" 
												required
												value={formData.email}
												onChange={handleChange}
												disabled={isSubmitting}
											/>
										</div>
									</div>
									<div className="col-md-6 mt-30">
										<div className="request__quote-item">
											<label>Number<span> *</span></label>
											<input 
												type="text" 
												name="phone"
												placeholder="+61 xxx xxx xxx" 
												required
												value={formData.phone}
												onChange={handleChange}
												disabled={isSubmitting}
											/>
										</div>
									</div>
									<div className="col-md-6 mt-30">
										<div className="request__quote-item">
											<label>Company/Organization<span> *</span></label>
											<input 
												type="text" 
												name="company"
												placeholder="Sharpline Solutions" 
												required
												value={formData.company}
												onChange={handleChange}
												disabled={isSubmitting}
											/>
										</div>
									</div>
									<div className="col-md-6 mt-30">
										<div className="request__quote-item">
											<label>Website<span> *</span></label>
											<input 
												type="text" 
												name="website"
												placeholder="http://sharplinesolutions.com" 
												required
												value={formData.website}
												onChange={handleChange}
												disabled={isSubmitting}
											/>
										</div>
									</div>
									<div className="col-md-12 mt-30">
										<p className="mb-10">What services do you require?<span> *</span></p>
										<div className="row">
											<div className="col-md-4">
												<div className="request__quote-services">
													{serviceOptions.slice(0, 3).map(service => (
														<label key={service}>
															<input 
																className="mr-10" 
																type="checkbox" 
																checked={formData.services.includes(service)}
																onChange={() => handleServiceChange(service)}
																disabled={isSubmitting}
															/>
															{service}
														</label>
													))}
												</div>
											</div>
											<div className="col-md-4">
												<div className="request__quote-services">
													{serviceOptions.slice(3, 6).map(service => (
														<label key={service}>
															<input 
																className="mr-10" 
																type="checkbox" 
																checked={formData.services.includes(service)}
																onChange={() => handleServiceChange(service)}
																disabled={isSubmitting}
															/>
															{service}
														</label>
													))}
												</div>
											</div>
											<div className="col-md-4">
												<div className="request__quote-services">
													{serviceOptions.slice(6).map(service => (
														<label key={service}>
															<input 
																className="mr-10" 
																type="checkbox" 
																checked={formData.services.includes(service)}
																onChange={() => handleServiceChange(service)}
																disabled={isSubmitting}
															/>
															{service}
														</label>
													))}
												</div>
											</div>
										</div>
									</div>
									<div className="col-md-12 mt-30">
										<div className="request__quote-item">
											<label>Message<span> *</span></label>
											<textarea 
												name="message"
												required
												value={formData.message}
												onChange={handleChange}
												disabled={isSubmitting}
												rows="5"
											></textarea>
										</div>
									</div>
									<div className="col-lg-12">
										<button 
											className="build_button mt-30" 
											type="submit"
											disabled={isSubmitting}
											style={{ opacity: isSubmitting ? 0.6 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
										>
											{isSubmitting ? 'Submitting...' : 'Submit Now'}
											{!isSubmitting && <i className="flaticon-right-up"></i>}
										</button>
									</div>
								</div>
							</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default RequestQuoteMain;