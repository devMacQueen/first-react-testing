// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import Button from './components/button'

function App() {

  return (
    <>
    <section className="relative bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </div>
        
        <div className="container mx-auto px-6 py-24 relative z-10">
            <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 mb-12 lg:mb-0">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Build Amazing <span className="gradient-text bg-gradient-to-r from-pink-500 to-yellow-500">Digital Experiences</span>
                    </h1>
                    <p className="text-xl text-blue-100 mb-8 max-w-lg">
                        Our platform helps you create stunning websites and applications with minimal effort and maximum creativity.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <Button name="Get started" />
                        <Button name="Learn More" />
                    </div>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                    <div className="relative w-full max-w-md">
                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-pink-500 rounded-full filter blur-3xl opacity-30"></div>
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-30"></div>
                        <img src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=" 
                             alt="Hero Image" 
                             className="relative z-10 w-full floating"/>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>

    
    <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <span className="text-sm font-semibold tracking-wider uppercase text-blue-600">Features</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Everything You Need to Succeed</h2>
                <p className="max-w-2xl mx-auto text-gray-600 mt-4">
                    Our platform is packed with powerful features designed to help you build, grow, and scale your business.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
                    <div className="h-48 bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center">
                        <i className="fas fa-bolt text-white text-6xl"></i>
                    </div>
                    <div className="p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Lightning Fast</h3>
                        <p className="text-gray-600 mb-4">
                            Optimized for performance with instant load times and smooth animations that delight your users.
                        </p>
                        <a href="#" className="text-blue-600 font-semibold inline-flex items-center">
                            Learn more <i className="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
                
                
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
                    <div className="h-48 bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center">
                        <i className="fas fa-paint-brush text-white text-6xl"></i>
                    </div>
                    <div className="p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Beautiful Design</h3>
                        <p className="text-gray-600 mb-4">
                            Stunning templates and customization options to make your project stand out from the crowd.
                        </p>
                        <a href="#" className="text-blue-600 font-semibold inline-flex items-center">
                            Learn more <i className="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
                
                
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
                    <div className="h-48 bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
                        <i className="fas fa-shield-alt text-white text-6xl"></i>
                    </div>
                    <div className="p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Secure & Reliable</h3>
                        <p className="text-gray-600 mb-4">
                            Enterprise-grade security and 99.9% uptime guarantee to keep your business running smoothly.
                        </p>
                        <a href="#" className="text-blue-600 font-semibold inline-flex items-center">
                            Learn more <i className="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

  
    <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                
                <div className="p-6">
                    <div className="text-5xl font-bold mb-2">10K+</div>
                    <div className="text-indigo-200 font-medium">Happy Customers</div>
                </div>
                
                {/* <!-- Stat 2 --> */}
                <div className="p-6">
                    <div className="text-5xl font-bold mb-2">99.9%</div>
                    <div className="text-indigo-200 font-medium">Uptime</div>
                </div>
                
                {/* <!-- Stat 3 --> */}
                <div className="p-6">
                    <div className="text-5xl font-bold mb-2">5M+</div>
                    <div className="text-indigo-200 font-medium">Daily Requests</div>
                </div>
                
                {/* <!-- Stat 4 --> */}
                <div className="p-6">
                    <div className="text-5xl font-bold mb-2">24/7</div>
                    <div className="text-indigo-200 font-medium">Support</div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Testimonials --> */}
    <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <span className="text-sm font-semibold tracking-wider uppercase text-blue-600">Testimonials</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">What Our Customers Say</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* <!-- Testimonial 1 --> */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500 transform hover:scale-105 transition-all">
                    <div className="flex items-center mb-4">
                        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah Johnson" className="w-12 h-12 rounded-full mr-4"/>
                        <div>
                            <h4 className="font-bold text-gray-900">Sarah Johnson</h4>
                            <p className="text-blue-600">CEO, TechStart</p>
                        </div>
                    </div>
                    <p className="text-gray-600 italic">
                        "This platform transformed our business. The ease of use combined with powerful features is unmatched in the industry."
                    </p>
                    <div className="mt-4 text-yellow-400">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                </div>
                
                {/* <!-- Testimonial 2 --> */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-purple-500 transform hover:scale-105 transition-all">
                    <div className="flex items-center mb-4">
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Michael Chen" className="w-12 h-12 rounded-full mr-4"/>
                        <div>
                            <h4 className="font-bold text-gray-900">Michael Chen</h4>
                            <p className="text-purple-600">Marketing Director</p>
                        </div>
                    </div>
                    <p className="text-gray-600 italic">
                        "The customer support is exceptional. They helped us migrate our entire infrastructure with zero downtime."
                    </p>
                    <div className="mt-4 text-yellow-400">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                </div>
                
                {/* <!-- Testimonial 3 --> */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-pink-500 transform hover:scale-105 transition-all">
                    <div className="flex items-center mb-4">
                        <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Emma Rodriguez" className="w-12 h-12 rounded-full mr-4"/>
                        <div>
                            <h4 className="font-bold text-gray-900">Emma Rodriguez</h4>
                            <p className="text-pink-600">Product Manager</p>
                        </div>
                    </div>
                    <p className="text-gray-600 italic">
                        "We've seen a 300% increase in conversions since implementing their solution. Simply game-changing!"
                    </p>
                    <div className="mt-4 text-yellow-400">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- CTA Section --> */}
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="max-w-2xl mx-auto text-blue-100 mb-8 text-xl">
                Join thousands of satisfied customers who are already building the future with our platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
                    Start Free Trial
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:bg-opacity-10 transition-all">
                    Schedule Demo
                </button>
            </div>
        </div>
    </section>

    
    <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                    </ul>
                </div>
                
                
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">Product</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
                    </ul>
                </div>
                
                
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Webinars</a></li>
                    </ul>
                </div>
                
                
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">Connect</h3>
                    <div className="flex space-x-4 mb-4">
                        <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                    <p className="text-sm">
                        Subscribe to our newsletter for the latest updates
                    </p>
                    <div className="mt-3 flex">
                        <input type="email" placeholder="Your email" className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"/>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <a href="#" className="text-white text-2xl font-bold flex items-center">
                        <i className="fas fa-crown text-yellow-500 mr-2"></i> BrandName
                    </a>
                </div>
                <div className="text-sm">
                    &copy; 2023 BrandName. All rights reserved.
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default App
