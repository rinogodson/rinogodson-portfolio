"use client";
import { useState } from "react";
import Modal from "../Modal/Modal";
import projectData from "./data";
import ProjectBox from "./ProjectBox";
import Button from "../Button/Button";
import { AnimatePresence } from "motion/react";

function ProjectClientWrapper() {
  const [modal, setModal] = useState(false);

  return (
    <div className="w-full flex justify-center items-center mt-10">
      <Button text="MORE PROJECTS" stateSetter={setModal} />
      <AnimatePresence>
        {modal && (
          <Modal setFalse={setModal}>
            <div className="grid sm:grid-cols-2 grid-cols-1 sm:w-[60vw] w-full gap-5 sm:p-10">
              {projectData.map((item, i) => {
                return (
                  <ProjectBox
                    key={item.title}
                    title={item.title}
                    stack={item.stack}
                    desc={item.description}
                    demo={item.demo}
                    repo={item.repo}
                    i={i}
                  />
                );
              })}
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProjectClientWrapper;
