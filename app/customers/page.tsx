import CustomerList from '@/app/ui/customer-list';

export const metadata = {
  title: 'Customers | Acme',
};

const sampleCustomers = [
  {
    id: '8',
    name: 'Ada Lovelace',
    email: 'ada@lovelace.com',
    pending: '531.34',
    paid: '124.01',
  },
  {
    id: '12',
    name: 'Grace Hopper',
    email: 'grace@hopper.com',
    pending: '823.45',
    paid: '456.78',
  },
  {
    id: '6',
    name: 'Alan Turing',
    email: 'alan@turing.com',
    pending: '234.56',
    paid: '789.12',
  },
];

export default function CustomersPage() {
  return (
    <div className="page-content">
      <h1>Customers</h1>
      <div className="customers-search">
        <input type="text" placeholder="Search customers" />
      </div>
      <CustomerList customers={sampleCustomers} />
    </div>
  );
}
