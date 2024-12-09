'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const confirmPassword = formData.get('confirmPassword') as string

    if (!email || !password) {
      setError('Please fill in all fields')
      setIsLoading(false)
      return
    }

    if (!isLogin && password !== confirmPassword) {
      setError('Passwords do not match')
      setIsLoading(false)
      return
    }

    try {
      // Here you would typically call your authentication API
      // For demonstration, we'll just simulate a delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Simulate successful login/signup
      router.push('/dashboard')
    } catch (err) {
      setError('Authentication failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 px-4 py-12 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md overflow-hidden shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-400 opacity-20"></div>
        <CardHeader className="relative z-10">
          <CardTitle className="text-3xl font-bold text-center text-gray-800">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </CardTitle>
          <CardDescription className="text-center text-gray-600">
            {isLogin
              ? 'Enter your credentials to access your account.'
              : 'Sign up to start receiving anonymous feedback.'}
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4 relative z-10">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700">Email</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                required 
                className="bg-white bg-opacity-80 focus:bg-opacity-100 transition-all duration-200"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="bg-white bg-opacity-80 focus:bg-opacity-100 transition-all duration-200"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-600" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-600" />
                  )}
                  <span className="sr-only">
                    {showPassword ? 'Hide password' : 'Show password'}
                  </span>
                </Button>
              </div>
            </div>
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-gray-700">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  className="bg-white bg-opacity-80 focus:bg-opacity-100 transition-all duration-200"
                />
              </div>
            )}
            {error && <p className="text-sm text-red-500 font-semibold">{error}</p>}
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 relative z-10">
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition-all duration-200 transform hover:scale-105"
              disabled={isLoading}
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isLogin ? 'Login' : 'Sign Up'}
            </Button>
            <div className="flex items-center justify-center space-x-2">
              <Switch
                id="auth-mode"
                checked={!isLogin}
                onCheckedChange={() => setIsLogin(!isLogin)}
                className="data-[state=checked]:bg-indigo-500"
              />
              <Label htmlFor="auth-mode" className="text-sm text-gray-600">
                {isLogin ? 'Need an account?' : 'Already have an account?'}
              </Label>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

