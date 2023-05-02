import { useSelector } from "react-redux";
import ContactDetails from "./ContactDetails";
import { RootState } from "../../redux/store";
import { Contact } from "../../utils/types";

const ContactList = () => {
  // state from redux
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  return (
    <div className="flex   w-full max-w-7xl flex-col gap-4  ">
      {contacts.map((contact: Contact) => (
        <ContactDetails contact={contact} key={contact.id} />
      ))}
    </div>
  );
};

export default ContactList;
