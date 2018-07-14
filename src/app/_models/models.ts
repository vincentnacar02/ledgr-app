export class Organization {
    constructor(
        public OrganizationID?: number,
        public OrganizationName?: string
    ) {}
}

export class TransactionHeader {
    constructor(
        public TransactionID?: number,
        public DateCreated?: string,
        public DatePosted?: string,
        public Memo?: string,
        public TotalDebit?: number,
        public TotalCredit?: number,
        public OrganizationID?: number,
        public FiscalYearID?: number,
        public TransactionRefID?: string,
        public IsPosted?: boolean
    ){}
}

export class TransactionLine {
    constructor(
        public TransactionLineID?: number,
        public TransactionID?: number,
        public AccountID?: number,
        public DocumentRef?: string,
        public UserID?: number,
        public DebitAmount?: number,
        public CreditAmount?: number
    ){}
}

export class Transaction {
    constructor(
        public Header?: TransactionHeader,
        public Lines?: TransactionLine[]
    ) {}
}

export class Account {
    constructor(
        public AccountID?: number,
        public AccountCode?: string,
        public AccountName?: string,
        public isDebit?: boolean
    ) {}
}

export class FiscalYear {
    constructor(
        public FiscalYearID?: number,
        public StartDate?: string,
        public EndDate?: string,
        public IsActive?: boolean,
        public OrganizationID?: number
    ){}
}

export class User {
    constructor(
        public UserID?: number,
        public UserName?: string,
        public EmailAddress?: string,
        public Password?: string,
        public FirstName?: string,
        public LastName?: string,
        public Birthdate?: string,
        public PhotoURL?: string
    ){}
}

export class DocumentRegister {
    constructor(
        public DocumentRegisterID?: number,
        public DocumentRef?: string,
        public UserID?: number,
        public AccountID?: number
    ) {}
}