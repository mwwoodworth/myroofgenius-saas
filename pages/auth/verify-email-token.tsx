import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  // Temporary safeguard: never fail build
  return { notFound: true };
};

export default function VerifyEmailToken() {
  return null;
}
