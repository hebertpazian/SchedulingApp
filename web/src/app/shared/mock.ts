import { Project } from './models/project.model';
import { Allocation } from './models/allocation.model';
import { Customer } from './models/customer.model';
import { Professional } from './models/professional.model';
import { Role } from './models/role.model';

export let ALLOCATIONS: Allocation[] = [
    {
        id: 1,
        startDate: new Date("2017-03-11T02:00:00.000Z"),
        endDate: new Date("2017-12-17T02:00:00.000Z"),
        percentual: 30,
        deleted: false,
        project: {
            id: 1,
            name: "Projeto 1",
            startDate: new Date("2017-03-11T02:00:00.000Z"),
            endDate: new Date("2017-03-11T02:00:00.000Z"),
            wbs: "WBSTESTE",
            deleted: false,
            professional: {
                id: 1,
                pid: 1406,
                eid: "thalita.santos",
                name: "Thalita",
                email: "thalita@avanade.com",
                phone: "17 1234-5678",
                deleted: false,
                role: {
                    id: 1,
                    name: "Associate Software Engineer",
                    brc: "A0022",
                    description: "Cargo mais baixo da Avanade",
                    level: 12,
                    deleted: false
                }
            },
            customer: {
                id: 1,
                name: "customer 1",
                contact: "11 5555-1111",
                email: "customer1@avanade.com",
                cnpj: null,
                deleted: false,
                sponsor: {
                    id: 1,
                    pid: 1406,
                    eid: "thalita.santos",
                    name: "Thalita",
                    email: "thalita@avanade.com",
                    phone: "17 1234-5678",
                    deleted: false,
                    role: {
                        id: 1,
                        name: "Associate Software Engineer",
                        brc: "A0022",
                        description: "Cargo mais baixo da Avanade",
                        level: 12,
                        deleted: false
                    }
                }
            }
        },
        professional: {
            id: 1,
            pid: 1406,
            eid: "thalita.santos",
            name: "Thalita",
            email: "thalita@avanade.com",
            phone: "17 1234-5678",
            deleted: false,
            role: {
                id: 1,
                name: "Associate Software Engineer",
                brc: "A0022",
                description: "Cargo mais baixo da Avanade",
                level: 12,
                deleted: false
            }
        }
    },
    {
        id: 2,
        startDate: new Date("2017-03-11T02:00:00.000Z"),
        endDate: new Date("2017-12-17T02:00:00.000Z"),
        percentual: 35,
        deleted: false,
        project: {
            id: 2,
            name: "Projeto 2",
            startDate: new Date("2017-03-11T02:00:00.000Z"),
            endDate: new Date("2017-03-11T02:00:00.000Z"),
            wbs: "WBSTESTE",
            deleted: false,
            professional: {
                id: 2,
                pid: 1132,
                eid: "victor.lima",
                name: "Victor",
                email: "victor@avanade.com",
                phone: "14 9876-5432",
                deleted: false,
                role: {
                    id: 2,
                    name: "Associate Software Engineer",
                    brc: "A0022",
                    description: "Cargo mais baixo da Avanade",
                    level: 9,
                    deleted: false
                }
            },
            customer: {
                id: 2,
                name: "customer 2",
                contact: "11 5555-2222",
                email: "customer2@avanade.com",
                cnpj: null,
                deleted: false,
                sponsor: {
                    id: 2,
                    pid: 1132,
                    eid: "victor.lima",
                    name: "Victor",
                    email: "victor@avanade.com",
                    phone: "14 9876-5432",
                    deleted: false,
                    role: {
                        id: 2,
                        name: "Associate Software Engineer",
                        brc: "A0022",
                        description: "Cargo mais baixo da Avanade",
                        level: 9,
                        deleted: false
                    }
                }
            }
        },
        professional: {
            id: 2,
            pid: 1132,
            eid: "victor.lima",
            name: "Victor",
            email: "victor@avanade.com",
            phone: "14 9876-5432",
            deleted: false,
            role: {
                id: 2,
                name: "Associate Software Engineer",
                brc: "A0022",
                description: "Cargo mais baixo da Avanade",
                level: 9,
                deleted: false
            }
        }
    },
    {
        id: 3,
        startDate: new Date("2017-03-11T02:00:00.000Z"),
        endDate: new Date("2017-12-17T02:00:00.000Z"),
        percentual: 40,
        deleted: false,
        project: {
            id: 3,
            name: "Projeto 3",
            startDate: new Date("2017-03-11T02:00:00.000Z"),
            endDate: new Date("2017-03-11T02:00:00.000Z"),
            wbs: "WBSTESTE",
            deleted: false,
            professional: {
                id: 3,
                pid: 3464,
                eid: "thais.duarte",
                name: "Thais",
                email: "thais@avanade.com",
                phone: "19 1234-5678",
                deleted: false,
                role: {
                    id: 3,
                    name: "Associate Software Engineer",
                    brc: "A0022",
                    description: "Cargo mais baixo da Avanade",
                    level: 10,
                    deleted: false
                }
            },
            customer: {
                id: 3,
                name: "customer 3",
                contact: "11 5555-3333",
                email: "custome31@avanade.com",
                cnpj: null,
                deleted: false,
                sponsor: {
                    id: 3,
                    pid: 3464,
                    eid: "thais.duarte",
                    name: "Thais",
                    email: "thais@avanade.com",
                    phone: "19 1234-5678",
                    deleted: false,
                    role: {
                        id: 3,
                        name: "Associate Software Engineer",
                        brc: "A0022",
                        description: "Cargo mais baixo da Avanade",
                        level: 10,
                        deleted: false
                    }
                }
            }
        },
        professional: {
            id: 3,
            pid: 3464,
            eid: "thais.duarte",
            name: "Thais",
            email: "thais@avanade.com",
            phone: "19 1234-5678",
            deleted: false,
            role: {
                id: 3,
                name: "Associate Software Engineer",
                brc: "A0022",
                description: "Cargo mais baixo da Avanade",
                level: 10,
                deleted: false
            }
        }
    },
];

export let CUSTOMERS: Customer[] = [
    {
        id: 1,
        name: "customer 1",
        contact: "11 5555-1111",
        email: "customer1@avanade.com",
        cnpj: null,
        deleted: false,
        sponsor: {
            id: 1,
            pid: 1406,
            eid: "thalita.santos",
            name: "Thalita",
            email: "thalita@avanade.com",
            phone: "17 1234-5678",
            deleted: false,
            role: {
                id: 1,
                name: "Associate Software Engineer",
                brc: "A0022",
                description: "Cargo mais baixo da Avanade",
                level: 12,
                deleted: false
            }
        }
    },
    {
        id: 2,
        name: "customer 2",
        contact: "11 5555-2222",
        email: "customer2@avanade.com",
        cnpj: null,
        deleted: false,
        sponsor: {
            id: 2,
            pid: 1132,
            eid: "victor.lima",
            name: "Victor",
            email: "victor@avanade.com",
            phone: "14 9876-5432",
            deleted: false,
            role: {
                id: 2,
                name: "Associate Software Engineer",
                brc: "A0022",
                description: "Cargo mais baixo da Avanade",
                level: 9,
                deleted: false
            }
        }
    },
    {
        id: 3,
        name: "customer 3",
        contact: "11 5555-3333",
        email: "custome31@avanade.com",
        cnpj: null,
        deleted: false,
        sponsor: {
            id: 3,
            pid: 3464,
            eid: "thais.duarte",
            name: "Thais",
            email: "thais@avanade.com",
            phone: "19 1234-5678",
            deleted: false,
            role: {
                id: 3,
                name: "Associate Software Engineer",
                brc: "A0022",
                description: "Cargo mais baixo da Avanade",
                level: 10,
                deleted: false
            }
        }
    }
];

export let PROFESSIONALS: Professional[] = [
    {
        id: 1,
        pid: 1406,
        eid: "thalita.santos",
        name: "Thalita",
        email: "thalita@avanade.com",
        phone: "17 1234-5678",
        deleted: false,
        role: {
            id: 1,
            name: "Associate Software Engineer",
            brc: "A0022",
            description: "Cargo mais baixo da Avanade",
            level: 12,
            deleted: false
        }
    },
    {
        id: 2,
        pid: 1132,
        eid: "victor.lima",
        name: "Victor",
        email: "victor@avanade.com",
        phone: "14 9876-5432",
        deleted: false,
        role: {
            id: 2,
            name: "Associate Software Engineer",
            brc: "A0022",
            description: "Cargo mais baixo da Avanade",
            level: 9,
            deleted: false
        }
    },
    {
        id: 3,
        pid: 3464,
        eid: "thais.duarte",
        name: "Thais",
        email: "thais@avanade.com",
        phone: "19 1234-5678",
        deleted: false,
        role: {
            id: 3,
            name: "Associate Software Engineer",
            brc: "A0022",
            description: "Cargo mais baixo da Avanade",
            level: 10,
            deleted: false
        }
    }
];

export let PROJECTS: Project[] = [
    {
        id: 1,
        name: "Projeto 1",
        startDate: new Date("2017-03-11T02:00:00.000Z"),
        endDate: new Date("2017-03-11T02:00:00.000Z"),
        wbs: "WBSTESTE",
        deleted: false,
        professional: {
            id: 1,
            pid: 1406,
            eid: "thalita.santos",
            name: "Thalita",
            email: "thalita@avanade.com",
            phone: "17 1234-5678",
            deleted: false,
            role: {
                id: 1,
                name: "Associate Software Engineer",
                brc: "A0022",
                description: "Cargo mais baixo da Avanade",
                level: 12,
                deleted: false
            }
        },
        customer: {
            id: 1,
            name: "customer 1",
            contact: "11 5555-1111",
            email: "customer1@avanade.com",
            cnpj: null,
            deleted: false,
            sponsor: {
                id: 1,
                pid: 1406,
                eid: "thalita.santos",
                name: "Thalita",
                email: "thalita@avanade.com",
                phone: "17 1234-5678",
                deleted: false,
                role: {
                    id: 1,
                    name: "Associate Software Engineer",
                    brc: "A0022",
                    description: "Cargo mais baixo da Avanade",
                    level: 12,
                    deleted: false
                }
            }
        }
    },
    {
        id: 2,
        name: "Projeto 2",
        startDate: new Date("2017-03-11T02:00:00.000Z"),
        endDate: new Date("2017-03-11T02:00:00.000Z"),
        wbs: "WBSTESTE",
        deleted: false,
        professional: {
            id: 2,
            pid: 1132,
            eid: "victor.lima",
            name: "Victor",
            email: "victor@avanade.com",
            phone: "14 9876-5432",
            deleted: false,
            role: {
                id: 2,
                name: "Associate Software Engineer",
                brc: "A0022",
                description: "Cargo mais baixo da Avanade",
                level: 9,
                deleted: false
            }
        },
        customer: {
            id: 2,
            name: "customer 2",
            contact: "11 5555-2222",
            email: "customer2@avanade.com",
            cnpj: null,
            deleted: false,
            sponsor: {
                id: 2,
                pid: 1132,
                eid: "victor.lima",
                name: "Victor",
                email: "victor@avanade.com",
                phone: "14 9876-5432",
                deleted: false,
                role: {
                    id: 2,
                    name: "Associate Software Engineer",
                    brc: "A0022",
                    description: "Cargo mais baixo da Avanade",
                    level: 9,
                    deleted: false
                }
            }
        }
    },
    {
        id: 3,
        name: "Projeto 3",
        startDate: new Date("2017-03-11T02:00:00.000Z"),
        endDate: new Date("2017-03-11T02:00:00.000Z"),
        wbs: "WBSTESTE",
        deleted: false,
        professional: {
            id: 3,
            pid: 3464,
            eid: "thais.duarte",
            name: "Thais",
            email: "thais@avanade.com",
            phone: "19 1234-5678",
            deleted: false,
            role: {
                id: 3,
                name: "Associate Software Engineer",
                brc: "A0022",
                description: "Cargo mais baixo da Avanade",
                level: 10,
                deleted: false
            }
        },
        customer: {
            id: 3,
            name: "customer 3",
            contact: "11 5555-3333",
            email: "custome31@avanade.com",
            cnpj: null,
            deleted: false,
            sponsor: {
                id: 3,
                pid: 3464,
                eid: "thais.duarte",
                name: "Thais",
                email: "thais@avanade.com",
                phone: "19 1234-5678",
                deleted: false,
                role: {
                    id: 3,
                    name: "Associate Software Engineer",
                    brc: "A0022",
                    description: "Cargo mais baixo da Avanade",
                    level: 10,
                    deleted: false
                }
            }
        }
    }
];

export let ROLES: Role[] = [
    {
        id: 1,
        name: "Associate Software Engineer",
        brc: "A0022",
        description: "Cargo mais baixo da Avanade",
        level: 12,
        deleted: false
    },
    {
        id: 2,
        name: "Associate Software Engineer",
        brc: "A0022",
        description: "Cargo mais baixo da Avanade",
        level: 9,
        deleted: false
    },
    {
        id: 3,
        name: "Associate Software Engineer",
        brc: "A0022",
        description: "Cargo mais baixo da Avanade",
        level: 10,
        deleted: false
    }
];