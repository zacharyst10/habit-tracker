export type Activity = {
  name: string;
  icon: React.ReactNode;
  duration: string;
  costLevel: string;
  seasonality: string;
  color: string;
  textColor: string;
};

export type DatabaseActivity = {
  activity_name: string;
  scheduled_date: string;
  kid_name: string;
};
