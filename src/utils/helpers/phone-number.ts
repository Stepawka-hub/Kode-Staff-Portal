export const formatPhoneNumber = (phone: string) => {
  const cleaned = phone.replace(/\D/g, "");
  const match = cleaned.match(/^(\+7|7|8)?(\d{3})(\d{3})(\d{2})(\d{2})$/);
  return match ? `+7 (${match[2]}) ${match[3]} ${match[4]} ${match[5]}` : phone;
};
