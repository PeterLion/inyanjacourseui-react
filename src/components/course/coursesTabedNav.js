import React from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import CourseChapiters from './CourseChapiter';

const CourseTabs = ({ course }) => {
    const chapiters = [{ name: 'Introduction to course', content: '' }, { name: 'What you will know after this course', content: '' }, { name: 'Getting Started', content: '' }]
    return (
        <Tabs>
            <TabList>
                <Tab>About the course</Tab>
                <Tab>Course Content</Tab>
                <Tab>Course Forum</Tab>
            </TabList>

            <TabPanel>
                <div className="container"><h1 className="lead">{course.description}</h1>

                </div>

            </TabPanel>
            <TabPanel>
                <h1><CourseChapiters chapiters={chapiters} /></h1>
            </TabPanel>
            <TabPanel>
                <h1>Question and announcements</h1>
            </TabPanel>
        </Tabs>
    )

}

export default CourseTabs;