import { Contact } from "../../utils/types";
import { deleteContact, editContact } from "../../redux/slices/contactSlice";
import ContactForm from "./ContactForm";
import { useAppDispatch } from "../../redux/store";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const ContactDetails = ({ contact }: { contact: Contact }) => {
  const dispatch = useAppDispatch();
  const [details, setDetails] = useState(false);

  return (
    <div className="w-full  overflow-hidden rounded-lg border bg-white px-2 py-2  shadow-lg  ">
      <div className="flex items-center  px-6  ">
        <div className="flex gap-3  ">
          <div className=" text-xl font-semibold capitalize">
            {contact.firstName}
          </div>
          <div className=" text-xl font-semibold capitalize">
            {contact.lastName}
          </div>
        </div>

        {/* show/hide more details  */}

        <button
          type="button"
          className="flex-1  "
          onClick={() => {
            setDetails(!details);
          }}
        >
          {details ? (
            <ChevronUp className="ml-auto" />
          ) : (
            <ChevronDown className="ml-auto" />
          )}
        </button>
      </div>

      {details ? (
        <div className=" bg-white">
          <div className="  space-y-2 px-6 py-2 ">
            <div className="mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 ">
              Email: {contact.email}
            </div>
            <span className="mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              Phone : {contact.phone}
            </span>
            <span className="mr-2 inline-flex items-center  gap-2 rounded-full bg-gray-200 px-3 py-1 text-center text-sm font-semibold text-gray-700">
              <span>Status</span>
              <span
                className={`h-3 w-3 rounded-full  ${
                  contact.isActive ? "bg-green-500" : "bg-red-500"
                }`}
              ></span>
            </span>
          </div>
          <div className="flex justify-between px-6 py-2 ">
            <button
              className="rounded-md bg-red-500  px-4 py-2 text-sm font-medium text-white hover:bg-opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
            <ContactForm
              contact={contact}
              buttonTitle="Edit Contact"
              title="Edit Contact"
              saveContact={(contact) => {
                dispatch(editContact(contact));
              }}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ContactDetails;
