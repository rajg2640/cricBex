import React from 'react'
import Container from '../shared/Container'
import CustomBreadcrumb from '../shared/CustomBreadcrumb'

const page = () => {
    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Fixtures and Results" },
    ]
    return (
        <div>
            <Container>
                <div className='py-4'>
                    <div className='flex items-center'>
                        <div>
                            <CustomBreadcrumb items={breadcrumbItems} />
                            <h2 className='text-[32px] font-medium text-dark-gray'>Asia Cup 2025</h2>
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default page