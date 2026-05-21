interface Invoice {
  id: string;
  customer: string;
  email: string;
  amount: string;
  date: string;
  status: 'pending' | 'paid';
}

interface InvoiceTableProps {
  invoices: Invoice[];
}

export default function InvoiceTable({ invoices }: InvoiceTableProps) {
  return (
    <div className="table-container">
      <table className="invoice-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Customer</th>
            <th>Email</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id}>
              <td>{invoice.id}</td>
              <td>
                <div className="customer-avatar">{invoice.customer[0]}</div>
                <span>{invoice.customer}</span>
              </td>
              <td>{invoice.email}</td>
              <td>${invoice.amount}</td>
              <td>{invoice.date}</td>
              <td>
                <span
                  className={`status-badge status-${invoice.status}`}
                >
                  {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                </span>
              </td>
              <td className="table-actions">
                <button className="action-btn" title="Edit">✏️</button>
                <button className="action-btn" title="Delete">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
