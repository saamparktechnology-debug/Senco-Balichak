import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://critzzykgblyhtmubxim.supabase.co";
const SERVICE_ROLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNyaXR6enlrZ2JseWh0bXVieGltIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc5MDMyMzU3NiwiZXhwIjoyMTA1ODk5NTc2fQ.VNPW_WeP15F50iolXIKlV3WQsEyDN1THufxRdSv1NRA";

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function main() {
  const email = "balichak2025@gmail.com";
  const password = "123456";

  console.log(`Checking if user ${email} already exists...`);
  const { data: usersData, error: listError } = await supabase.auth.admin.listUsers();
  if (listError) {
    console.error("Error listing users:", listError);
    return;
  }

  const existing = usersData.users.find(u => u.email?.toLowerCase() === email.toLowerCase());

  if (existing) {
    console.log(`User ${email} found (${existing.id}). Updating password and confirming email...`);
    const { data: updated, error: updateError } = await supabase.auth.admin.updateUserById(existing.id, {
      password: password,
      email_confirm: true,
      user_metadata: { full_name: "Senco Balichak Admin" }
    });
    if (updateError) {
      console.error("Error updating user:", updateError);
    } else {
      console.log("User updated successfully:", updated.user.id);
    }
  } else {
    console.log(`Creating user ${email}...`);
    const { data: created, error: createError } = await supabase.auth.admin.createUser({
      email: email,
      password: password,
      email_confirm: true,
      user_metadata: { full_name: "Senco Balichak Admin" }
    });
    if (createError) {
      console.error("Error creating user:", createError);
    } else {
      console.log("User created successfully:", created.user.id);
    }
  }

  // Verify accounts and profiles
  const { data: profiles, error: profileErr } = await supabase.from('profiles').select('*');
  console.log("Profiles count:", profiles?.length, profileErr ? `Error: ${profileErr.message}` : '');
  const { data: accounts, error: accErr } = await supabase.from('accounts').select('*');
  console.log("Accounts count:", accounts?.length, accErr ? `Error: ${accErr.message}` : '');
  const { data: members, error: memErr } = await supabase.from('account_members').select('*');
  console.log("Account members count:", members?.length, memErr ? `Error: ${memErr.message}` : '');
}

main();
