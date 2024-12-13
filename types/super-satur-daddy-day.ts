export type Activity = {
  name: string;
  icon: React.ReactNode;
  duration: string;
  costLevel: string;
  seasonality: string;
  color: string;
  textColor: string;
};

export interface ActivityModalProps {
  isOpen: boolean;
  onClose: () => void;
  activity: string;
  onSave: (date: Date, kid: string) => void;
}

export interface SpecialActivitiesProps {
  onActivityScheduled: (activity: Activity, date: Date, kid: string) => void;
}

export type NextMission = {
  kid_name: string;
  activity_name: string;
  scheduled_date: string;
};
