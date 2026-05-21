import InvoiceTable from '@/app/ui/invoice-table';

export const metadata = {
  title: 'Invoices | Acme',
};

const sampleInvoices = [
  {
    id: '85842ba0-...',
    customer: 'Ada Lovelace',
    email: 'ada@lovelace...',
    amount: '157.95',
    date: 'Dec 6, 2022',
    status: 'pending' as const,
  },
  {
    id: '85842ba0-...',
    customer: 'Ada Lovelace',
    email: 'ada@lovelace...',
    amount: '157.95',
    date: 'Dec 6, 2022',
    status: 'paid' as const,
  },
  {
    id: '85842ba0-...',
    customer: 'Ada Lovelace',
    email: 'ada@lovelace...',
    amount: '157.95',
    date: 'Dec 6, 2022',
    status: 'paid' as const,
  },
  {
    id: '85842ba0-...',
    customer: 'Ada Lovelace',
    email: 'ada@lovelace...',
    amount: '157.95',
    date: 'Dec 6, 2022',
    status: 'pending' as const,
  },
  {
    id: '85842ba0-...',
    customer: 'Ada Lovelace',
    email: 'ada@lovelace...',
    amount: '157.95',
    date: 'Dec 6, 2022',
    status: 'pending' as const,
  },
  {
    id: '85842ba0-...',
    customer: 'Ada Lovelace',
    email: 'ada@lovelace...',
    amount: '157.95',
    date: 'Dec 6, 2022',
    status: 'paid' as const,
  },
];

export default function InvoicesPage() {
  return (
    <div className="page-content">
      <div className="invoices-header">
        <h1>Invoices</h1>
        <button className="btn-primary">Create Invoice +</button>
      </div>
      <div className="invoices-search">
        <input type="text" placeholder="Search invoices" />
      </div>
      <InvoiceTable invoices={sampleInvoices} />
      <div className="pagination">
        <button>←</button>
        <button className="pagination-active">1</button>
        <button>2</button>
        <button>...</button>
        <button>5</button>
        <button>6</button>
        <button>→</button>
      </div>
    </div>
  );
}
