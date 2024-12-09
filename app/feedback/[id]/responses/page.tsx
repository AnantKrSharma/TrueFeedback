import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

// Mock data - replace with actual data fetching in a real application
const mockResponses = [
  { id: '1', content: 'Great work on the project!', timestamp: '2023-06-01T10:00:00Z' },
  { id: '2', content: 'Communication could be improved.', timestamp: '2023-06-02T14:30:00Z' },
  { id: '3', content: 'I appreciate your attention to detail.', timestamp: '2023-06-03T09:15:00Z' },
]

export default function FeedbackResponsesPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto bg-white bg-opacity-90 backdrop-blur-lg rounded-lg shadow-xl p-6 sm:p-8 lg:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">Feedback Responses</h1>
        <p className="text-lg text-gray-600 mb-6">Viewing responses for feedback link: {params.id}</p>
        
        <div className="space-y-4">
          {mockResponses.map((response) => (
            <Card key={response.id} className="bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardHeader>
                <CardDescription>{new Date(response.timestamp).toLocaleString()}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800">{response.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

