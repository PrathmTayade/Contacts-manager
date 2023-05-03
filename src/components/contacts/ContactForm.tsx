import React, { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import * as Dialog from "@radix-ui/react-dialog";
import * as Switch from "@radix-ui/react-switch";
import { FC } from "react";
import { Contact } from "../../utils/types";
import { X } from "lucide-react";

interface ContactFormProps {
  contact?: Contact;
  title: string;
  buttonTitle: string;
  saveContact: (contact: Contact) => void;
}

const ContactForm: FC<ContactFormProps> = ({
  contact,
  buttonTitle,
  saveContact,
  title,
}) => {
  const [isOpen, setIsOpen] = useState(false); // Dialog
  const [firstName, setFirstName] = useState(contact?.firstName || "");
  const [lastName, setLastName] = useState(contact?.lastName || "");
  const [email, setEmail] = useState(contact?.email || "");
  const [phone, setPhone] = useState(contact?.phone || "");
  const [isActive, setIsActive] = useState(contact?.isActive || false); // added state for active/inactive toggle

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // prevent default
    const newContact = {
      id: contact?.id || nanoid(), // id of the new contact
      firstName,
      lastName,
      email,
      phone,
      isActive,
    };

    saveContact(newContact);

    //setting the fields to blank if new contact is created
    if (!contact) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
    }

    setIsOpen(!isOpen); //Close the dialog
  };

  return (
    // Dialog Modal
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="rounded-md bg-blue-500  px-4 py-2 text-sm font-medium text-white hover:bg-opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            {buttonTitle}
          </button>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className=" fixed inset-0 bg-black bg-opacity-25" />
        <Dialog.Content className=" fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-8 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className=" text-xl font-medium text-black">
            {title}
          </Dialog.Title>

          {/* Input Form */}
          <form onSubmit={handleSubmit}>
            <div className="my-4 flex justify-between gap-2">
              <div>
                <label
                  className="mb-2 block font-bold text-gray-700"
                  htmlFor="firstName"
                >
                  First name:
                </label>
                <input
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  id="firstName"
                  type="text"
                  placeholder="John "
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label
                  className="mb-2 block font-bold text-gray-700"
                  htmlFor="lastName"
                >
                  Last name:
                </label>
                <input
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="mb-2 block font-bold text-gray-700"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                id="email"
                type="email"
                placeholder="johndoe@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="mb-2 block font-bold text-gray-700"
                htmlFor="phone"
              >
                Phone:
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                id="phone"
                type="tel"
                placeholder="123-456-7890"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            {/* Switch to toggle status  */}
            <div className="mb-4 ">
              <label
                className="mb-2 block font-bold text-gray-700"
                htmlFor="status"
              >
                Status:
              </label>
              <Switch.Root
                className="relative h-7 w-11 cursor-default rounded-full bg-red-500 shadow-md  outline-none   data-[state=checked]:bg-green-500"
                id="status"
                checked={isActive}
                defaultChecked={false}
                onCheckedChange={() => setIsActive(!isActive)}
              >
                <Switch.Thumb className=" block h-5 w-5 translate-x-0.5 rounded-full bg-white shadow-[0_2px_2px] transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]" />
              </Switch.Root>
            </div>
            <div className="flex justify-between">
              <Dialog.Close asChild>
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  Close
                </button>
              </Dialog.Close>

              <button
                className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              {/* close icon from lucide */}
              <X />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ContactForm;
