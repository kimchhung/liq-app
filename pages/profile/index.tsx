import { Auth, Typography, Button } from "@supabase/ui";
const { Text } = Typography;
import { supabase } from "utils/supabaseClient";

function Profile(props) {
  const { user } = Auth.useUser();
  console.log(user);
  if (user)
    return (
      <>
        <Text>Signed in: {user.email}</Text>
        <Button block onClick={() => props.supabaseClient.auth.signOut()}>
          Sign out
        </Button>
      </>
    );
  return props.children;
}

export default function AuthProfile() {
  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      <Profile supabaseClient={supabase}>
        <Auth providers={["google"]} supabaseClient={supabase} />
      </Profile>
    </Auth.UserContextProvider>
  );
}
