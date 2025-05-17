import ContactDetail from "../pages/contacts/ContactDetail";
import ContactsLayout from "../pages/contacts/ContactsLayout";
import ContactsList from "../pages/contacts/ContactsList";
import ProtectedRoutes from "../components/ProtectedRoutes";

const contactsRoutes = [
    {
        path : 'contacts',
        element: (
            <ProtectedRoutes>
                <ContactsLayout />
            </ProtectedRoutes>
        ),
        children: [
            {
                path: ':id',
                element: <ContactDetail />
            },
            {
                // path: '',
                index: true,
                element: <ContactsList />
            }
        ]
    }
]

export default contactsRoutes;