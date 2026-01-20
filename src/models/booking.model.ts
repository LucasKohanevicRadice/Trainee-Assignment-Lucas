/**
 * Varauksen tietomallit ja DTO:t
 */

export interface Booking {
  id: string;
  roomId: string;
  userId: string;
  userEmail: string;
  title: string;
  startTime: Date;
  endTime: Date;
  createdAt: Date;
}

export interface CreateBookingDto {
  roomId: string;
  userId: string;
  userEmail: string;
  title: string;
  startTime: string; // ISO 8601 muodossa
  endTime: string; // ISO 8601 muodossa
}

export interface BookingResponse {
  id: string;
  roomId: string;
  roomName: string;
  userId: string;
  userEmail: string;
  title: string;
  startTime: string; // ISO 8601 muodossa
  endTime: string; // ISO 8601 muodossa
  createdAt: string; // ISO 8601 muodossa
}
