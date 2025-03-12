import React from 'react'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'

const Contact = () => {
    const [result, setResult] = React.useState("")

    const onSubmit = async (event) => {
        event.preventDefault()
        setResult("Sending....")
        const formData = new FormData(event.target)

        //Create this key from here => https://web3forms.com/
        formData.append("access_key", "b742d9f6-566f-44d7-935b-f3ecaf109695")

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        })

        const data = await response.json()

        if (data.success) {
            setResult("")
            toast.success("Form Submitted Successfully")
            event.target.reset()
        } else {
            console.log("Error", data)
            toast.error(data.message)
            setResult("")
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='p-10 lg:px-32 w-full bg-gradient-to-b from-gray-900 to-gray-800 text-white' // Background Improved
            id='Contact'
        >
            <h1 className='text-3xl sm:text-5xl font-bold mb-10 text-center'>
                Contact <span className='underline underline-offset-4 decoration-2 font-light'>With Us</span>
            </h1>

            <div className='grid md:grid-cols-2 gap-12 items-center'> {/* Alignment Improved */}
                {/* LEFT SIDE: KEY INFORMATION */}
                <div className='bg-gray-800 text-white p-10 rounded-2xl shadow-lg flex flex-col justify-center h-full'>
                    <h2 className='text-3xl font-bold mb-6 text-center text-blue-400'>Key Information</h2>
                    <table className='w-full text-left'>
                        <tbody>
                            <tr>
                                <td className='font-semibold py-2 text-lg'>Founding Year:</td>
                                <td className='py-2 text-lg text-gray-300'>2024</td>
                            </tr>
                            <tr>
                                <td className='font-semibold py-2 text-lg'>Founder/CEO:</td>
                                <td className='py-2 text-lg text-gray-300'>R. Kumar Choudhary, S. Panday</td>
                            </tr>
                            <tr>
                                <td className='font-semibold py-2 text-lg'>Employees:</td>
                                <td className='py-2 text-lg text-gray-300'>+200</td>
                            </tr>
                            <tr>
                                <td className='font-semibold py-2 text-lg'>Industry:</td>
                                <td className='py-2 text-lg text-gray-300'>Construction industry, specializing in residential projects</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* RIGHT SIDE: CONTACT FORM */}
                <form onSubmit={onSubmit} className='bg-white shadow-2xl p-10 rounded-2xl w-full text-gray-700 flex flex-col justify-center'>
                    <h2 className='text-2xl font-semibold mb-6 text-center text-gray-800'>Get in Touch</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='text-left'>
                            <label className='block font-medium'>Your Name</label>
                            <input className='w-full border border-gray-300 rounded-lg py-3 px-4 mt-1 focus:ring-2 focus:ring-blue-400' 
                                type="text" name='Name' placeholder='Your Name' required />
                        </div>
                        <div className='text-left'>
                            <label className='block font-medium'>Your Email</label>
                            <input className='w-full border border-gray-300 rounded-lg py-3 px-4 mt-1 focus:ring-2 focus:ring-blue-400' 
                                type="email" name='Email' placeholder='Your Email' required />
                        </div>
                    </div>
                    <div className='mt-6 text-left'>
                        <label className='block font-medium'>Message</label>
                        <textarea className='w-full border border-gray-300 rounded-lg py-3 px-4 mt-1 h-32 resize-none focus:ring-2 focus:ring-blue-400'
                            name="Message" placeholder='Write your message here...' required></textarea>
                    </div>
                    <button className='bg-blue-600 text-white py-3 px-12 mt-6 w-full rounded-xl font-medium hover:bg-blue-700 transition duration-300'>
                        {result ? result : "Send Message"}
                    </button>
                </form>
            </div>
        </motion.div>
    )
}

export default Contact
