import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next'
import { getServerSession } from 'next-auth/next'
import { getProviders, signIn } from 'next-auth/react'

import { authOptions } from '../api/auth/[...nextauth]'

export default function SignIn({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="grid h-screen place-items-center bg-gradient-to-br from-cyan-600 to-blue-300">
      <div className="grid gap-8">
        <h1 className="text-center text-5xl text-gray-800">
          로그인이 필요합니다.
        </h1>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className="w-full rounded-lg border border-gray-300 py-2 text-xl font-bold"
              onClick={() => signIn(provider.id)}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions)

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: '/' } }
  }

  const providers = await getProviders()

  return {
    props: { providers: providers ?? [] },
  }
}
