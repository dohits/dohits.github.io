import { redirect } from 'next/navigation';
export default async function allpostRedirectPage() {
  redirect('/posts/list/1');
}
