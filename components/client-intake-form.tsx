"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Phone, Mail, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AuryonLogo } from "@/components/auryon-logo"

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Please enter your name" }),
  businessName: z.string().min(2, { message: "Please enter your business name" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phoneNumber: z.string().min(10, { message: "Please enter a valid phone number" }),
  bestTimeToContact: z.string().optional(),
  teamSize: z.string().min(1, { message: "Please select your team size" }),
  interest: z.string().min(1, { message: "Please select what you're interested in" }),
  otherDescription: z.string().optional(),
  budgetRange: z.string().min(1, { message: "Please select your budget range" }),
  goals: z.string().optional(),
})

export function ClientIntakeForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showOtherField, setShowOtherField] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      businessName: "",
      email: "",
      phoneNumber: "",
      bestTimeToContact: "",
      teamSize: "",
      interest: "",
      otherDescription: "",
      budgetRange: "",
      goals: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    setIsSubmitted(true)
  }

  const handleInterestChange = (value: string) => {
    form.setValue("interest", value)
    setShowOtherField(value === "Other")
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-2xl bg-white rounded-xl shadow-sm border">
        <CardContent className="pt-10 pb-10 text-center">
          <div className="mb-6">
            <AuryonLogo className="mx-auto h-12 w-12" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Thanks!</h2>
          <p className="text-gray-600">
            Your information has been submitted. We'll be in touch shortly to move things forward.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-2xl bg-white rounded-xl shadow-sm border">
      <CardHeader className="text-center pb-2">
        <div className="mb-6">
          <AuryonLogo className="mx-auto h-12 w-12" />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">Let's Get to Know You</h2>
        <p className="text-sm text-gray-500 mt-2">
          Tell us a bit more about your goals and where you're headed—we'll take it from there.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-sm text-gray-500">
                Full Name
              </Label>
              <Input
                id="fullName"
                {...form.register("fullName")}
                placeholder="Your name"
                className="rounded-lg border shadow-sm"
              />
              {form.formState.errors.fullName && (
                <p className="text-sm text-red-500">{form.formState.errors.fullName.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="businessName" className="text-sm text-gray-500">
                Business Name
              </Label>
              <Input
                id="businessName"
                {...form.register("businessName")}
                placeholder="Your business"
                className="rounded-lg border shadow-sm"
              />
              {form.formState.errors.businessName && (
                <p className="text-sm text-red-500">{form.formState.errors.businessName.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm text-gray-500">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                {...form.register("email")}
                placeholder="you@example.com"
                className="rounded-lg border shadow-sm"
              />
              {form.formState.errors.email && (
                <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phoneNumber" className="text-sm text-gray-500">
                Phone Number
              </Label>
              <Input
                id="phoneNumber"
                type="tel"
                {...form.register("phoneNumber")}
                placeholder="(123) 456-7890"
                className="rounded-lg border shadow-sm"
              />
              {form.formState.errors.phoneNumber && (
                <p className="text-sm text-red-500">{form.formState.errors.phoneNumber.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="bestTimeToContact" className="text-sm text-gray-500">
                Best Time to Contact You
              </Label>
              <Input
                id="bestTimeToContact"
                {...form.register("bestTimeToContact")}
                placeholder="e.g. Afternoons, Tuesdays"
                className="rounded-lg border shadow-sm"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="teamSize" className="text-sm text-gray-500">
                Headcount / Team Size
              </Label>
              <Select onValueChange={(value) => form.setValue("teamSize", value)}>
                <SelectTrigger id="teamSize" className="rounded-lg border shadow-sm">
                  <SelectValue placeholder="Select team size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-5">1-5</SelectItem>
                  <SelectItem value="6-10">6-10</SelectItem>
                  <SelectItem value="11-25">11-25</SelectItem>
                  <SelectItem value="26-50">26-50</SelectItem>
                  <SelectItem value="51+">51+</SelectItem>
                </SelectContent>
              </Select>
              {form.formState.errors.teamSize && (
                <p className="text-sm text-red-500">{form.formState.errors.teamSize.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="interest" className="text-sm text-gray-500">
              What are you interested in?
            </Label>
            <Select onValueChange={handleInterestChange}>
              <SelectTrigger id="interest" className="rounded-lg border shadow-sm">
                <SelectValue placeholder="Select your interest" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="CRM Setup">CRM Setup</SelectItem>
                <SelectItem value="Sales Process Help">Sales Process Help</SelectItem>
                <SelectItem value="Funnel Strategy">Funnel Strategy</SelectItem>
                <SelectItem value="Team Onboarding">Team Onboarding</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
            {form.formState.errors.interest && (
              <p className="text-sm text-red-500">{form.formState.errors.interest.message}</p>
            )}
          </div>

          {showOtherField && (
            <div className="space-y-2">
              <Label htmlFor="otherDescription" className="text-sm text-gray-500">
                Can you tell us more?
              </Label>
              <Textarea
                id="otherDescription"
                {...form.register("otherDescription")}
                placeholder="Please describe what you're interested in"
                className="min-h-[80px] rounded-lg border shadow-sm"
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="budgetRange" className="text-sm text-gray-500">
              Budget Range
            </Label>
            <Select onValueChange={(value) => form.setValue("budgetRange", value)}>
              <SelectTrigger id="budgetRange" className="rounded-lg border shadow-sm">
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Under $5,000">Under $5,000</SelectItem>
                <SelectItem value="$5,000–$15,000">$5,000–$15,000</SelectItem>
                <SelectItem value="$15,000+">$15,000+</SelectItem>
              </SelectContent>
            </Select>
            {form.formState.errors.budgetRange && (
              <p className="text-sm text-red-500">{form.formState.errors.budgetRange.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="goals" className="text-sm text-gray-500">
              Tell us more about what you're hoping to achieve
            </Label>
            <Textarea
              id="goals"
              {...form.register("goals")}
              placeholder="Your goals and priorities"
              className="min-h-[120px] rounded-lg border shadow-sm"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow transition-all duration-300 font-medium"
          >
            Submit Info
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col items-center justify-center pt-2 pb-6 text-sm text-gray-500">
        <div className="flex items-center space-x-1 mb-1">
          <Mail className="h-4 w-4" />
          <span>sean@unfoldedproject.com</span>
        </div>
        <div className="flex items-center space-x-1 mb-1">
          <Phone className="h-4 w-4" />
          <span>740-600-4468</span>
        </div>
        <div className="flex items-center space-x-1">
          <Globe className="h-4 w-4" />
          <span>www.auryon.cloud</span>
        </div>
      </CardFooter>
    </Card>
  )
}
