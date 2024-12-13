import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';


const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({name:'',email:'', message:''});
    const [loading, setLoading] = useState(false);
    const handleChange = ({target:{name,value}})=>{
        setForm({... form, [name]:value})
    }

    //service_64u25kf
    const handleSubmit = async (e)=>{ 
        e.preventDefault();
        setLoading(true);
        try{

        await    emailjs.send(
                'service_64u25kf',
                'template_n6i7u5p',
                {
                    
                    from_name:form.name,
                    to_name:'Swapnil',
                    from_email:form.email,
                    to_email:'swapnilsriv441@gmail.com',
                    message:form.message
                },
                '61gWL_as5j4VQgZxX'
            )
            setLoading(false);
            alert('Message sent successfully')
            setForm({
                name:'',
                email:'',
                message:''
            })
        }
        catch (error){
            setLoading(false);
            console.log(error);
            alert('Something went wrong!')
            
        }
    }

  return (
    <section className='c-space my-20 ' id='contact'>
        <div className=' min-h-screen flex items-center justify-center flex-col'>
            {/* <img src="/assets/terminal.png" alt="terminal background" className='absolute inset-0 min-h-screen' /> */}
            <div className='contact-container flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 backdrop-blur-md'>
        <h3 className='head-text my-10 text-white'>Let's talk</h3>
        <p className='text-lg text-white-800 mt-3'>Whether you're looking for a new website, improve your existing platform, or bring a unique project to life, I'm here to help. </p>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
            <label className='space-y-3 '>
                <span className='field-label'>Full Name</span>
                <input type="text"
                name='name'
                value={form.name}
                onChange={handleChange}
                required
                className='field-input'
                placeholder='John Doe' />

            </label>
            <label className='space-y-3'>
                <span className='field-label'>Email</span>
                <input type="email"
                name='email'
                value={form.email}
                onChange={handleChange}
                required
                className='field-input'
                placeholder='johndoe@gmail.com' />

            </label>
            <label className='space-y-3'>
                <span className='field-label'>Your Message</span>
                <textarea
                name='message'
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className='field-input'
                placeholder='Type your message here...' />

            </label>
            <button className='field-btn glowing-border m-0' type='submit' disabled={loading}>
                {loading?'Sending...':'Send Message'}
                <img src="/assets/arrow-up.png" alt="arrow-up" className='field-btn_arrow' />
            </button>
 
        </form>

            </div>
        </div>
    </section>
  )
}

export default Contact