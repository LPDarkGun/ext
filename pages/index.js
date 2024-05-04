import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const [clanGrowth, setClanGrowth] = useState([]);
  const [clanStats, setClanStats] = useState([]);
  const [messages, setMessages] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    axios.get('/api/clangrowth').then(response => {
      setClanGrowth(response.data);
    }).catch(error => {
      setErrorMessage("Failed to load message logs.");
      console.error("Error fetching messages:", error);
    });
  }, []);

  useEffect(() => {
    axios.get('/api/message').then(response => {
      setMessages(response.data);
    }).catch(error => {
      setErrorMessage("Failed to load message logs.");
      console.error("Error fetching messages:", error);
    });
  }, []);


  const messageVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, x: 20, transition: { duration: 0.3, ease: "easeIn" } }
  };
  const { data: session } = useSession();


  return (
    <Layout>
      <div className="text-white">
        <p>Total: {clanGrowth.memberCount}</p>
        <p>Left members: {clanGrowth.leftMembers}</p>
        <p>New members: {clanGrowth.newMembers}</p>
      </div>

  <AnimatePresence>
        {errorMessage && (
          <motion.div
            variants={messageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="text-red-500 mb-2"
          >
            {errorMessage}
          </motion.div>
        )}
        {successMessage && (
          <motion.div
            variants={messageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="text-green-500 mb-2"
          >
            {successMessage}
          </motion.div>
        )}
      </AnimatePresence>

    </Layout>
  );
}
