import React, { useState } from "react";

const StudentDashboard = () => {
  const courses = [
    {
      id: 1,
      name: "React Js",
      progress: 79,
      instructor: "Hamsza Ahmed",
      nextLesson: "React Hooks",
      color: "blue",
    },
    {
      id: 2,
      name: "Git and Github ",
      progress: 47,
      instructor: " Ahmed Nur",
      nextLesson: "Github actions",
      color: "purple",
    },
    {
      id: 3,
      name: "Advanced java",
      progress: 95,
      instructor: "Ali Ahmed",
      nextLesson: "javaFx",
      color: "pink",
    },
  ];

  const assignments = [
    {
      id: 1,
      title: "Weather Application",
      course: "Advance java",
      dueDate: "2026-09-20",
      status: "pending",
    },
    {
      id: 2,
      title: "Fotm Handling ",
      course: "React Js",
      dueDate: "2026-04-12",
      status: "in-progress",
    },
    {
      id: 3,
      title: "Pull Request ",
      course: "Git and Github",
      dueDate: "2026-07-2",
      status: "completed",
    },
  ];

  const announcements = [
    {
      id: 1,
      title: "Registration is open",
      message: "welcome our new program",
      time: "3 hours ago",
    },
    {
      id: 2,
      title: "Graduation Date",
      message: "We invited you to participate our graduation date thanks.",
      time: "1 hour ago",
    },
  ];

  const stats = [
    { label: "Average Grade", value: "83%", icon: "📊" },
    { label: "Courses", value: "3", icon: "📚" },
    { label: "Study Hours", value: "45h", icon: "⏰" },
    { label: "Assignments", value: "12", icon: "✍️" },
  ];

  return (
    <div className="min-h-screen  bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* header */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Welcome back, Student!
              </h1>
              <p className="text-gray-500">
                Here's what's happening with your courses today.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
                <button className="p-2 text-gray-400 hover:text-gray-500">
                  🔔
                </button>
              </div>
              <div className="h-10 w-10 rounded-full bg-linear-to-r from-purple-400 to-pink-500 flex items-center justify-center text-white font-semibold">
                S
              </div>
            </div>
          </div>
        </div>

        {/* Stats-Card*/}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center">
                <div className="text-2xl mr-4">{stat.icon}</div>
                <div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                  <div className="text-2xl font-bold text-gray-800">
                    {stat.value}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Course program section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800  mb-4">
                Course Progress
              </h2>
              <div className="space-y-4">
                {courses.map((course) => (
                  <div key={course.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-gray-800 font-medium">{course.name}</h3>
                      <span className="text-sm text-gray-500">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full min-h-2.5">
                      <div
                        className={`h-2.5 rounded-full ${
                          course.progress >= 75
                            ? "bg-green-500"
                            : course.progress >= 50
                              ? "bg-yellow-500"
                              : "bg-pink-500"
                        }`}
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <div className="mt-2 flex justify-between text-sm">
                      <span className="text-gray-500">
                        Next: {course.nextLesson}
                      </span>
                      <span className="text-gray-500">{course.instructor}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Sidebar Content */}
          <div className="space-y-6">
            {/* Upcoming Assignments */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Assignments</h2>
              <div className="space-y-4">
                {assignments.map(assignment => (
                  <div key={assignment.id} className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-800">{assignment.title}</h3>
                      <p className="text-sm text-gray-500">{assignment.course}</p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                        ${assignment.status === 'completed' ? 'bg-green-100 text-green-800' :
                          assignment.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                        }`}>
                        {assignment.status}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">Due {assignment.dueDate}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Announcements */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Announcements</h2>
              <div className="space-y-4">
                {announcements.map(announcement => (
                  <div key={announcement.id} className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-medium text-gray-800">{announcement.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{announcement.message}</p>
                    <p className="text-xs text-gray-400 mt-1">{announcement.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default StudentDashboard;
