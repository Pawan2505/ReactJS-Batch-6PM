import UserList from "./UserList";

// SayHello Component
function SayHello() {
  return (
    <div>
      <h1>User List</h1>
      {/* Import kiya hua UserList component yahan render kar rahe hain */}
      <UserList />
    </div>
  );
}

export default SayHello;

/*
Concept Points:
1. Component Import:
   - Dusre component (UserList) ko import karke is component me use kiya gaya hai.

2. Reusability:
   - React me ek component ke andar dusra component use kar sakte hain, jisse code reusable aur modular hota hai.

3. JSX Return:
   - Div ke andar ek heading aur imported component (UserList) ko return kiya gaya hai.

4. export default:
   - Component ko bahar export kiya gaya hai taaki dusri files me ise import karke use kar saken.

Important:
- Import path me "./" ka matlab hota hai current folder se file ko import karna.
- Component names hamesha **Capital Letter** se start karte hain (React rule).
*/
