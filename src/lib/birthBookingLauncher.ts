export const BIRTH_BOOKING_OPEN_EVENT = 'khan:birth-booking:open';

export function openBirthBooking(): void {
  window.dispatchEvent(new CustomEvent(BIRTH_BOOKING_OPEN_EVENT));
}
