export interface StrapiResponse {
  data: Record<string, unknown>[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// email: "m.alcaraz.iborra@gmail.com",
//     documentNumber: "75253591Y",
//     phone: "0034675048525",
//     createdAt: "2023-08-31T12:50:45.054Z",
//     updatedAt: "2023-08-31T12:50:45.054Z",
//     publishedAt: "2023-08-31T12:50:45.046Z",
//     headQuarters: "Córdoba",
//     role: "Facilitador",
//     name: "Mario",
//     lastName: "Alcaraz Iborra",
//     country: "España",
//     address: "Calle Arfe, 2 bajo izquierda, Córdoba",
//     volunteeringAgreement: true,
//     ethicalDocumentAgreement: true,
//     ageVerification: true,
//     signDataPath: string

export interface Agreement{
  email: string;
  documentNumber: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  headQuarters: string;
  role: string;
  name: string;
  lastName: string;
  country: string;
  address: string;
  volunteeringAgreement: boolean;
  ethicalDocumentAgreement: boolean;
  ageVerification: boolean;
  signDataPath: string
}
