import { parsePhoneNumberFromString } from "libphonenumber-js";

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
}

export function validatePhoneNumber(
  countryCode: string,
  phone: string,
) {
  const normalizedCountryCode = countryCode.startsWith("+")
    ? countryCode
    : `+${countryCode}`;

  // Keep only digits from phone number
  const cleanPhone = phone.replace(/\D/g, "");

  const phoneNumber = parsePhoneNumberFromString(
    `${normalizedCountryCode}${cleanPhone}`,
  );

  if (!phoneNumber) {
    return {
      valid: false,
      message: "Invalid phone number",
    };
  }

  // Make sure the phone number belongs to the selected country code
  if (
    `+${phoneNumber.countryCallingCode}` !== normalizedCountryCode
  ) {
    return {
      valid: false,
      message: "Phone number does not match the selected country code",
    };
  }

  // Country-specific validation
  if (!phoneNumber.isValid()) {
    return {
      valid: false,
      message: "Invalid phone number for the selected country",
    };
  }

  return {
    valid: true,
    countryCode: `+${phoneNumber.countryCallingCode}`,
    phone: phoneNumber.nationalNumber,
  };
}