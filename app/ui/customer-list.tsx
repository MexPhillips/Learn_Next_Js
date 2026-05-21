interface Customer {
  id: string;
  name: string;
  email: string;
  pending: string;
  paid: string;
}

interface CustomerListProps {
  customers: Customer[];
}

export default function CustomerList({ customers }: CustomerListProps) {
  return (
    <div className="customer-list">
      {customers.map((customer) => (
        <div key={customer.id} className="customer-item">
          <div className="customer-avatar">{customer.name[0]}</div>
          <div className="customer-info">
            <p className="customer-name">{customer.name}</p>
            <p className="customer-email">{customer.email}</p>
          </div>
          <div className="customer-stats">
            <div className="stat">
              <p className="stat-label">Pending</p>
              <p className="stat-value">${customer.pending}</p>
            </div>
            <div className="stat">
              <p className="stat-label">Paid</p>
              <p className="stat-value">${customer.paid}</p>
            </div>
          </div>
          <div className="invoices-count">{customer.id} invoices</div>
        </div>
      ))}
    </div>
  );
}
