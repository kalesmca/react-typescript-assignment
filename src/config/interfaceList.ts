export interface Dashboard {
  dogList: Dog[];
  isBucketFull: boolean;
  paginationIndex: 0;
  sortBy: String;
  allDataList: Dog[];
}

export interface AppConfig {
  showSpinner: boolean;
  showToast: boolean;
  toastMsg: String;
}

export interface Dog {
  bred_for: String;
  breed_group: String;
  height: any;
  id: number;
  image?: any;
  origin: String;
  reference_image_id: String;
  temperament: String;
  weight: any;
  life_span?: String;
  name: String;
  filteredHeight?: number;
  filteredLife?: number;
}

