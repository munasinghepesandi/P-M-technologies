import { RevealOnScroll } from "../RevealOnScroll"


export const Contact = () => {
    return(
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>

                <div className="px-4 w-150 text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    <h2>{" "}Get In Touch</h2> <br/>

                    <form className="space-y-6">
                        <div className="relative">
                            <input type="text" 
                            id="name" name="name" 
                            className="w-full font-medium bg-white/5 border border-white/10 rounded px-6 py-0.5 text-white transition focus:outline-none 
                            focus:border-blue-500 focus:bg-blue-500/5" placeholder="Name" 
                            required/>
                        </div>
                        <div className="relative">
                            <input type="email" 
                            id="email" 
                            name="email" 
                            className="w-full bg-white/5 border border-white/10 rounded px-6 py-0.5 text-white transition focus:outline-none 
                            focus:border-blue-500 focus:bg-blue-500/5" placeholder="example@gmail.com" 
                            required/>
                        </div>
                        <div className="relative">
                            <textarea type="message"
                             id="message" 
                             name="message"
                             required
                             rows={5} 
                             className="w-full font-medium bg-white/5 border border-white/10 rounded px-6 py-0.5 text-white transition focus:outline-none 
                            focus:border-blue-500 focus:bg-blue-500/5" placeholder="Message.."/>
                        </div>

                        <button type="submit" 
                        className="w-full bg-blue-700 text-white py-3 px-6 rounded font-sans transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">Send</button>
                    </form>
                </div>

            </RevealOnScroll>
        </section>
    );
};