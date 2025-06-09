"use client";

import { Github, Linkedin, MailIcon, PhoneIcon } from "lucide-react";
import { HeadingTitle } from "../HeadingTitle";
import clsx from "clsx";
import { LinkStyle } from "../LinkStyle";
import { useState } from "react";

export function Contact() {
  const [showTel, setShowTel] = useState(false);

  return (
    <section id="contacts" className="mb-40">
      <div className={clsx("flex flex-col justify-center items-center")}>
        <HeadingTitle title="Contatos" subTitle="Entre em contato." />
        <div className="flex flex-col gap-6">
          <div className={clsx("text-xl")}>
            <span>email: </span>
            <LinkStyle
              href="mailto:kevenpyw@gmail.com"
              name="kevenpyw@gmail.com"
            />
          </div>
          <div
            className={clsx(
              "flex justify-center gap-4",
              "[&_a]:bg-neutral-500 [&_a]:p-2",
              "[&_a]:rounded-md [&_a]:hover:scale-110",
              "[&_a]:transition-all"
            )}
          >
            <a href="https://github.com/KevenFernandes" target="_blank">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/keven-pyw/" target="_blank">
              <Linkedin />
            </a>
            <button
              className={clsx(
                "bg-neutral-500 p-2 rounded-md",
                "hover:scale-110 cursor-pointer",
                "transition-all"
              )}
              onClick={() => setShowTel((s) => !s)}
            >
              <PhoneIcon />
            </button>
            <a href="mailto:kevenpyw@gmail.com">
              <MailIcon />
            </a>
          </div>
          {showTel && (
            <div className="text-center">
              <p>Whatsapp:(61) 99313-2014</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
