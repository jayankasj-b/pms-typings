export type PresentingComplaintItem = {
  condition: string;
  duration: string;
  complaintPrettified?: string;
};

export type PresentingComplaint = {
  complaints?: PresentingComplaintItem[];
};
