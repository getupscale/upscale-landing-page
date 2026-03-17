export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export type Database = {
  public: {
    Tables: {
      waitlist_signups: {
        Row: {
          id: string;
          email: string;
          name: string | null;
          company: string;
          role: string;
          company_size: string;
          use_cases: string[];
          notes: string | null;
          email_status: "pending" | "sent" | "error";
          email_sent_at: string | null;
          resend_message_id: string | null;
          email_error: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          name?: string | null;
          company: string;
          role: string;
          company_size: string;
          use_cases?: string[];
          notes?: string | null;
          email_status?: "pending" | "sent" | "error";
          email_sent_at?: string | null;
          resend_message_id?: string | null;
          email_error?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          name?: string | null;
          company?: string;
          role?: string;
          company_size?: string;
          use_cases?: string[];
          notes?: string | null;
          email_status?: "pending" | "sent" | "error";
          email_sent_at?: string | null;
          resend_message_id?: string | null;
          email_error?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
