import React, { useState } from 'react'
import { Button } from '../atoms/button';
import { CardContent } from '../atoms/card-content';
import { Card } from '../atoms/card';
import { CardHeader } from '../atoms/card-header';
import { CardTitle } from '../atoms/card-title';
import { Download, Github, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

export const ContactForm = () => {
   const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí implementarías la lógica de envío del formulario
    console.log('Form submitted:', formData);
    alert('¡Mensaje enviado! Te responderé pronto.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const downloadCV = () => {
    // Crear un PDF simple con información básica
    const cvContent = `
Sofia Martínez - Desarrolladora Fullstack

INFORMACIÓN DE CONTACTO:
- Email: sofia@example.com
- Teléfono: +34 123 456 789
- Ubicación: Madrid, España

EXPERIENCIA LABORAL:

Desarrolladora Frontend Senior | TechInnovate Solutions (Enero 2022 - Presente)
- Lideré el desarrollo de interfaces de usuario para aplicaciones web complejas usando React y TypeScript
- Implementé arquitecturas escalables que mejoraron el rendimiento en un 40%
- Colaboré con equipos de diseño UX/UI para crear experiencias de usuario excepcionales
- Mentoricé a desarrolladores junior y establecí mejores prácticas de código

Desarrolladora Fullstack | Digital Creative Agency (Marzo 2020 - Diciembre 2021)
- Desarrollé aplicaciones web completas desde el frontend hasta el backend
- Creé APIs RESTful robustas y bases de datos optimizadas
- Integré sistemas de pago y servicios de terceros
- Participé en la planificación y arquitectura de proyectos

Desarrolladora Frontend Junior | StartupLab (Junio 2018 - Febrero 2020)
- Desarrollé componentes reutilizables y interfaces responsivas
- Optimicé el rendimiento web y la experiencia de usuario
- Participé en pruebas A/B y análisis de métricas de usuario
- Colaboré en metodologías ágiles y scrum

TECNOLOGÍAS:
React, TypeScript, Next.js, Tailwind CSS, GraphQL, Vue.js, Node.js, Express, MongoDB, AWS, JavaScript, SASS, Git, Figma
    `;

    // Crear y descargar archivo
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'CV-Sofia-Martinez.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="contact" className="">
        {/* <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
            Hablemos
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría conocer más sobre tu idea y cómo puedo ayudarte a hacerla realidad.
          </p>
        </div> */}

        {/* <div className="grid lg:grid-cols-3 gap-12"> */}
          {/* Contact Info */}
          {/* <div className="lg:col-span-1 animate-slide-in" style={{ animationDelay: '0.2s' }}> */}
            {/* <div className="space-y-8"> */}
              {/* Contact Details */}
              {/* <Card className="glass-card hover-lift">
                <CardHeader>
                  <CardTitle className="text-xl gradient-text">Información de Contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700 dark:text-gray-300">sofia@example.com</span>
                  </div>
                  <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                    <Phone className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700 dark:text-gray-300">+34 123 456 789</span>
                  </div>
                  <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700 dark:text-gray-300">Madrid, España</span>
                  </div>
                </CardContent>
              </Card> */}

              {/* CV Download */}
              {/* <Card className="glass-card hover-lift">
                <CardHeader>
                  <CardTitle className="text-xl gradient-text">Currículum Vitae</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Descarga mi CV completo con todos los detalles de mi experiencia y habilidades.
                  </p>
                  <Button 
                    onClick={downloadCV}
                    className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Descargar CV (TXT)
                  </Button>
                </CardContent>
              </Card> */}

              {/* Social Links */}
              {/* <Card className="glass-card hover-lift">
                <CardHeader>
                  <CardTitle className="text-xl gradient-text">Sígueme</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/sofia-dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all duration-300 hover:scale-110 hover:rotate-12"
                    >
                      <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </a>
                    <a
                      href="https://linkedin.com/in/sofia-martinez"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all duration-300 hover:scale-110 hover:rotate-12"
                    >
                      <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </a>
                    <a
                      href="https://twitter.com/sofia_dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all duration-300 hover:scale-110 hover:rotate-12"
                    >
                      <Twitter className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </a>
                  </div>
                </CardContent>
              </Card> */}
            {/* </div> */}
          {/* </div> */}

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-slide-in" style={{ animationDelay: '0.4s' }}>
            <Card className="glass-card h-fit hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text">Envíame un mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-focus-within:text-purple-600 transition-colors">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:shadow-md focus:shadow-lg"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-focus-within:text-purple-600 transition-colors">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:shadow-md focus:shadow-lg"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="group">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-focus-within:text-purple-600 transition-colors">
                      Asunto *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:shadow-md focus:shadow-lg"
                      placeholder="¿De qué quieres hablar?"
                    />
                  </div>
                  
                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-focus-within:text-purple-600 transition-colors">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition-all duration-300 hover:shadow-md focus:shadow-lg"
                      placeholder="Cuéntame sobre tu proyecto o idea..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        {/* </div> */}
    </section>
  )
}
