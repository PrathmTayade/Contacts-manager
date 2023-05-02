import ContactForm from "../components/contacts/ContactForm";
import ContactList from "../components/contacts/ContactList";
import { useAppDispatch } from "../redux/store";
import { addContact } from "../redux/slices/contactSlice";

const ContactsPage = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-1 flex-col  items-center gap-5 px-6 py-4">
      <h1 className="mb-4 text-3xl font-bold">Contacts</h1>
      <ContactList />
      <div className="">
        <ContactForm
          buttonTitle="Create Contact"
          title="Add new Contact"
          saveContact={(contact) => {
            dispatch(addContact(contact));
          }}
        />
      </div>
    </div>
  );
};

export default ContactsPage;
