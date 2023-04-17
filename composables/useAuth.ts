export const useAuth = () => {
  const supabase = useSupabaseClient();

  const loginWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      throw createError({
        statusCode: 400,
        message: error.message,
      });
    }
  };

  const registerWithEmail = async (credentials: any) => {
    const { email, password } = credentials;

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      throw createError({
        statusCode: 400,
        message: error.message,
      });
    }
  };

  const loginWithEmail = async (credentials: any) => {
    const { email, password } = credentials;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw createError({
        statusCode: 400,
        message: error.message,
      });
    }
  };

  return {
    loginWithGoogle,
    registerWithEmail,
    loginWithEmail,
  };
};
