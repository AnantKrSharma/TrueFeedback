'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { CopyIcon, ExternalLinkIcon, LoaderIcon } from 'lucide-react'
import { generateFeedbackLink } from '@/lib/utils'

// This would typically come from a database
const mockLinks = [
  { id: '1', url: 'https://feedback.app/abc123', responses: 5, created: '2023-05-01' },
  { id: '2', url: 'https://feedback.app/def456', responses: 12, created: '2023-05-15' },
]

async function GenerateNewLink() {
  const newLink = await generateFeedbackLink()
  // In a real app, you'd save this to the database here
  return newLink
}

function LinkTable({ links }: { links: typeof mockLinks }) {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Link</TableHead>
            <TableHead>Responses</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {links.map((link) => (
            <TableRow key={link.id}>
              <TableCell className="font-medium">{link.url}</TableCell>
              <TableCell>{link.responses}</TableCell>
              <TableCell>{link.created}</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" variant="outline" onClick={() => navigator.clipboard.writeText(link.url)}>
                    <CopyIcon className="h-4 w-4 mr-2" />
                    Copy
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link href={`/feedback/${link.id}`}>
                      <ExternalLinkIcon className="h-4 w-4 mr-2" />
                      View
                    </Link>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto bg-white bg-opacity-90 backdrop-blur-lg rounded-lg shadow-xl p-6 sm:p-8 lg:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-10 text-gray-800">Feedback Dashboard</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            <CardHeader>
              <CardTitle>Total Responses</CardTitle>
              <CardDescription className="text-blue-100">Across all feedback links</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">17</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-green-400 to-emerald-500 text-white">
            <CardHeader>
              <CardTitle>Active Links</CardTitle>
              <CardDescription className="text-green-100">Number of active feedback links</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">2</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
            <CardHeader>
              <CardTitle>Generate New Link</CardTitle>
              <CardDescription className="text-yellow-100">Create a new feedback link</CardDescription>
            </CardHeader>
            <CardContent>
                {/* @ts-expect-error:typescript-type */}
              <form action={GenerateNewLink}>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input placeholder="Optional custom slug" className="bg-white text-gray-800" />
                  <Button type="submit" className="bg-white text-orange-500 hover:bg-orange-100">Generate</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6 bg-white">
          <CardHeader>
            <CardTitle>Your Feedback Links</CardTitle>
            <CardDescription>Manage and view your feedback links</CardDescription>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<LoaderIcon className="animate-spin" />}>
              <LinkTable links={mockLinks} />
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
