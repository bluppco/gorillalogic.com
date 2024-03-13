// IMPORTS ATOMS
import Link from "@/atoms/links/jsx/index.jsx"
import PictureInternal from "@/atoms/picture/internal/jsx/index.jsx"
import PictureInternalContain from "@/atoms/picture/internal/jsx/contain/index.jsx"

// IMPORTS FRAMER MOTION
import { motion, AnimatePresence } from "framer-motion"

// IMPORTS REACT
import { useState } from "react"

const MobileHeader = () => {

    const [ isOpen, updateOpen ] = useState( false )

    return (
        <header className="md:hidden bg-background fixed top-16 px-4 py-6 z-20 w-full">
            <div className="flex justify-between items-center z-20">
                <Link href="/" aria_label="gorilla logic logo">
                    <div className="w-28 object-cover">
                        <PictureInternal
                            alternative_text="gorilla logic logo"
                            source="/logo/gl_logo.svg"
                        />
                    </div>
                </Link>
                <div onClick={ () => updateOpen( !isOpen ) }>
                    {

                        isOpen &&
                        <div className="w-6 aspect-square">
                            <PictureInternalContain
                                alternative_text="close icon"
                                source="/icons/close.svg"
                            />
                        </div>

                    }
                    {

                        !isOpen &&
                        <div className="w-6 aspect-square">
                            <PictureInternalContain
                                alternative_text="menu icon"
                                source="/icons/menu.svg"
                            />
                        </div>

                    }
                </div>
            </div>
            <AnimatePresence initial={ false }>
                {

                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate={ isOpen ? "open" : "collapsed" }
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "100vh" },
                            collapsed: { opacity: 0, height: "0px" }
                        }}
                        transition={{ duration: 0.3 }}
                        className="grow"
                    >
                        <div className="flex flex-col gap-1 items-center justify-center h-full z-10">
                            <ul className="flex flex-col gap-8">
                                <li className="text-white font-open_sans font-thin">About Us</li>
                                <li className="text-white font-open_sans font-thin">Work</li>
                                <li className="text-white font-open_sans font-thin">Services</li>
                                <li className="text-white font-open_sans font-thin">Community and Careers</li>
                                <li className="text-white font-open_sans font-thin">Blog and Resources</li>
                                <li className="text-white font-open_sans font-thin">Contact Us</li>
                            </ul>
                        </div>
                    </motion.div>

                }
            </AnimatePresence>
        </header>
    )

}

export default MobileHeader
