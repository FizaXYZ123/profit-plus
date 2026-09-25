export interface Country {
  name: string;
  code: string;
  dialCode: string;
  flag: string;
  minLength: number;
  maxLength: number;
  format: string;
}

export const COUNTRIES: Country[] = [
  { name: "United States", code: "US", dialCode: "+1", flag: "🇺🇸", minLength: 10, maxLength: 10, format: "202 555 0123" },
  { name: "India", code: "IN", dialCode: "+91", flag: "🇮🇳", minLength: 10, maxLength: 10, format: "98765 43210" },
  { name: "United Kingdom", code: "GB", dialCode: "+44", flag: "🇬🇧", minLength: 10, maxLength: 10, format: "7911 123456" },
  { name: "United Arab Emirates", code: "AE", dialCode: "+971", flag: "🇦🇪", minLength: 9, maxLength: 9, format: "50 123 4567" },
  { name: "Canada", code: "CA", dialCode: "+1", flag: "🇨🇦", minLength: 10, maxLength: 10, format: "416 555 0123" },
  { name: "Australia", code: "AU", dialCode: "+61", flag: "🇦🇺", minLength: 9, maxLength: 9, format: "412 345 678" },
  { name: "Singapore", code: "SG", dialCode: "+65", flag: "🇸🇬", minLength: 8, maxLength: 8, format: "8123 4567" },
  { name: "Saudi Arabia", code: "SA", dialCode: "+966", flag: "🇸🇦", minLength: 9, maxLength: 9, format: "50 123 4567" },
  { name: "Qatar", code: "QA", dialCode: "+974", flag: "🇶🇦", minLength: 8, maxLength: 8, format: "3312 3456" },
  { name: "Kuwait", code: "KW", dialCode: "+965", flag: "🇰🇼", minLength: 8, maxLength: 8, format: "9123 4567" },
  { name: "Oman", code: "OM", dialCode: "+968", flag: "🇴🇲", minLength: 8, maxLength: 8, format: "9123 4567" },
  { name: "Bahrain", code: "BH", dialCode: "+973", flag: "🇧🇭", minLength: 8, maxLength: 8, format: "3912 3456" },
  { name: "Germany", code: "DE", dialCode: "+49", flag: "🇩🇪", minLength: 10, maxLength: 11, format: "1512 3456789" },
  { name: "France", code: "FR", dialCode: "+33", flag: "🇫🇷", minLength: 9, maxLength: 9, format: "6 12 34 56 78" },
  { name: "Italy", code: "IT", dialCode: "+39", flag: "🇮🇹", minLength: 10, maxLength: 10, format: "312 345 6789" },
  { name: "Spain", code: "ES", dialCode: "+34", flag: "🇪🇸", minLength: 9, maxLength: 9, format: "612 345 678" },
  { name: "Netherlands", code: "NL", dialCode: "+31", flag: "🇳🇱", minLength: 9, maxLength: 9, format: "6 12345678" },
  { name: "Switzerland", code: "CH", dialCode: "+41", flag: "🇨🇭", minLength: 9, maxLength: 9, format: "79 123 45 67" },
  { name: "Sweden", code: "SE", dialCode: "+46", flag: "🇸🇪", minLength: 9, maxLength: 9, format: "70 123 45 67" },
  { name: "Norway", code: "NO", dialCode: "+47", flag: "🇳🇴", minLength: 8, maxLength: 8, format: "412 34 567" },
  { name: "Denmark", code: "DK", dialCode: "+45", flag: "🇩🇰", minLength: 8, maxLength: 8, format: "32 12 34 56" },
  { name: "Ireland", code: "IE", dialCode: "+353", flag: "🇮🇪", minLength: 9, maxLength: 9, format: "85 123 4567" },
  { name: "Poland", code: "PL", dialCode: "+48", flag: "🇵🇱", minLength: 9, maxLength: 9, format: "512 345 678" },
  { name: "Portugal", code: "PT", dialCode: "+351", flag: "🇵🇹", minLength: 9, maxLength: 9, format: "912 345 678" },
  { name: "Belgium", code: "BE", dialCode: "+32", flag: "🇧🇪", minLength: 9, maxLength: 9, format: "470 12 34 56" },
  { name: "Austria", code: "AT", dialCode: "+43", flag: "🇦🇹", minLength: 10, maxLength: 10, format: "664 1234567" },
  { name: "New Zealand", code: "NZ", dialCode: "+64", flag: "🇳🇿", minLength: 9, maxLength: 9, format: "21 123 4567" },
  { name: "South Africa", code: "ZA", dialCode: "+27", flag: "🇿🇦", minLength: 9, maxLength: 9, format: "71 123 4567" },
  { name: "Japan", code: "JP", dialCode: "+81", flag: "🇯🇵", minLength: 10, maxLength: 10, format: "90 1234 5678" },
  { name: "China", code: "CN", dialCode: "+86", flag: "🇨🇳", minLength: 11, maxLength: 11, format: "138 1234 5678" },
  { name: "Hong Kong", code: "HK", dialCode: "+852", flag: "🇭🇰", minLength: 8, maxLength: 8, format: "5123 4567" },
  { name: "South Korea", code: "KR", dialCode: "+82", flag: "🇰🇷", minLength: 10, maxLength: 10, format: "10 1234 5678" },
  { name: "Malaysia", code: "MY", dialCode: "+60", flag: "🇲🇾", minLength: 9, maxLength: 10, format: "12 345 6789" },
  { name: "Indonesia", code: "ID", dialCode: "+62", flag: "🇮🇩", minLength: 10, maxLength: 12, format: "812 3456 7890" },
  { name: "Philippines", code: "PH", dialCode: "+63", flag: "🇵🇭", minLength: 10, maxLength: 10, format: "917 123 4567" },
  { name: "Thailand", code: "TH", dialCode: "+66", flag: "🇹🇭", minLength: 9, maxLength: 9, format: "81 234 5678" },
  { name: "Vietnam", code: "VN", dialCode: "+84", flag: "🇻🇳", minLength: 9, maxLength: 9, format: "91 234 5678" },
  { name: "Turkey", code: "TR", dialCode: "+90", flag: "🇹🇷", minLength: 10, maxLength: 10, format: "501 234 5678" },
  { name: "Egypt", code: "EG", dialCode: "+20", flag: "🇪🇬", minLength: 10, maxLength: 10, format: "10 1234 5678" },
  { name: "Nigeria", code: "NG", dialCode: "+234", flag: "🇳🇬", minLength: 10, maxLength: 10, format: "802 123 4567" },
  { name: "Kenya", code: "KE", dialCode: "+254", flag: "🇰🇪", minLength: 9, maxLength: 9, format: "712 345678" },
  { name: "Brazil", code: "BR", dialCode: "+55", flag: "🇧🇷", minLength: 11, maxLength: 11, format: "11 91234 5678" },
  { name: "Mexico", code: "MX", dialCode: "+52", flag: "🇲🇽", minLength: 10, maxLength: 10, format: "55 1234 5678" },
  { name: "Argentina", code: "AR", dialCode: "+54", flag: "🇦🇷", minLength: 10, maxLength: 10, format: "11 1234 5678" },
  { name: "Colombia", code: "CO", dialCode: "+57", flag: "🇨🇴", minLength: 10, maxLength: 10, format: "300 123 4567" },
  { name: "Chile", code: "CL", dialCode: "+56", flag: "🇨🇱", minLength: 9, maxLength: 9, format: "9 1234 5678" },
  { name: "Russia", code: "RU", dialCode: "+7", flag: "🇷🇺", minLength: 10, maxLength: 10, format: "912 345 67 89" },
  { name: "Ukraine", code: "UA", dialCode: "+380", flag: "🇺🇦", minLength: 9, maxLength: 9, format: "50 123 4567" },
  { name: "Pakistan", code: "PK", dialCode: "+92", flag: "🇵🇰", minLength: 10, maxLength: 10, format: "300 1234567" },
  { name: "Bangladesh", code: "BD", dialCode: "+880", flag: "🇧🇩", minLength: 10, maxLength: 10, format: "1712 345678" },
  { name: "Sri Lanka", code: "LK", dialCode: "+94", flag: "🇱🇰", minLength: 9, maxLength: 9, format: "71 234 5678" },
  { name: "Nepal", code: "NP", dialCode: "+977", flag: "🇳🇵", minLength: 10, maxLength: 10, format: "984 1234567" },
  { name: "Israel", code: "IL", dialCode: "+972", flag: "🇮🇱", minLength: 9, maxLength: 9, format: "50 123 4567" },
  { name: "Greece", code: "GR", dialCode: "+30", flag: "🇬🇷", minLength: 10, maxLength: 10, format: "691 234 5678" },
  { name: "Czech Republic", code: "CZ", dialCode: "+420", flag: "🇨🇿", minLength: 9, maxLength: 9, format: "601 123 456" },
  { name: "Hungary", code: "HU", dialCode: "+36", flag: "🇭🇺", minLength: 9, maxLength: 9, format: "20 123 4567" },
  { name: "Romania", code: "RO", dialCode: "+40", flag: "🇷🇴", minLength: 9, maxLength: 9, format: "712 345 678" },
  { name: "Finland", code: "FI", dialCode: "+358", flag: "🇫🇮", minLength: 9, maxLength: 10, format: "40 123 4567" },
];

export function getCountry(codeOrDial?: string): Country {
  if (!codeOrDial) return COUNTRIES[0];
  const foundByCode = COUNTRIES.find((c) => c.code.toUpperCase() === codeOrDial.toUpperCase());
  if (foundByCode) return foundByCode;
  const foundByDial = COUNTRIES.find((c) => c.dialCode === codeOrDial);
  if (foundByDial) return foundByDial;
  return COUNTRIES[0];
}
