import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Modal from "./components/Modal";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);

  return (
    <div>
      <motion.button
        className="save-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => (modalOpen ? closeModal() : openModal())}
      >
        Launch Modal
      </motion.button>

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && (
          <Modal
            handleClose={closeModal}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
