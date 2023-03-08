import Link from "next/link";
import { Button } from "react-bootstrap";

export const AdminAdsColumn = (props)=>{
    return [
        {
            prop: "title",
            title:"عنوان",
            isFilterable: true,
            cell: (row) => (
                <Link
                    href={`/admins/ads/jkh-${row.ad_id}`}
                >
                    <a>{row.title}</a>
                </Link>
            ),
            isSortable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "ad_type",
            title: "نوع",
            isSortable: true,
            isFilterable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "category_name",
            title: "دسته‌بندی",
            isSortable: true,
            isFilterable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "state_name",
            title: "استان",
            isSortable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "city_name",
            title: "شهر",
            isSortable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "status_name",
            title: "وضعیت",
            isSortable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "button",
            title:"عملیات",
            cell: (row) => (
                <>
                    <Link href={`/admins/ads/jkh-${row.ad_id}`}>
                        <Button 
                            className="btn-sm"
                            variant="outline-indigo"
                        >
                            جزییات
                        </Button>
                    </Link>
                    <Button
                        className="btn-sm ms-2 me-2 delOpt"
                        variant="outline-warning"
                        onClick={(e)=>{
                            props.blckAd(row.ad_id)
                        }}
                    >
                        {row.status == 3 ? "فعال سازی" : "مسدود سازی"}
                    </Button>
                    <Button
                        className="btn-sm delOpt"
                        variant="outline-danger"
                        onClick={(e)=>{
                            props.deleteAd(row.ad_id)
                        }}
                    >
                        حذف
                    </Button>
                </>
            ),
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        }
    ]
}

export const OperatorAdsColumn = (props)=>{
    return [
        {
            prop: "title",
            title:"عنوان",
            isFilterable: true,
            cell: (row) => (
                <Link
                    href={`/admins/operators/ads/jkh-${row.ad_id}`}
                >
                    <a>{row.title}</a>
                </Link>
            ),
            isSortable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "ad_type",
            title: "نوع",
            isSortable: true,
            isFilterable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "category_name",
            title: "دسته‌بندی",
            isSortable: true,
            isFilterable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "state_name",
            title: "استان",
            isSortable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "city_name",
            title: "شهر",
            isSortable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "status_name",
            title: "وضعیت",
            isSortable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "button",
            title:"عملیات",
            cell: (row) => (
                <>
                    <Link href={`/admins/operators/ads/jkh-${row.ad_id}`}>
                        <Button 
                            className="btn-sm"
                            variant="outline-indigo"
                        >
                            جزییات
                        </Button>
                    </Link>
                    {props.hasAccess && (
                        <>
                            <Button
                                className="btn-sm ms-2 me-2 delOpt"
                                variant="outline-warning"
                                onClick={(e)=>{
                                    props.blckAd(row.ad_id)
                                }}
                            >
                                {row.status == 3 ? "فعال سازی" : "مسدود سازی"}
                            </Button>
                            <Button
                                className="btn-sm delOpt"
                                variant="outline-danger"
                                onClick={(e)=>{
                                    props.deleteAd(row.ad_id)
                                }}
                            >
                                حذف
                            </Button>
                        </>
                    )}
                    
                </>
            ),
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        }
    ]
}

export const AdminAgenciesColumn = (props)=>{
    return [
        {
            prop: "name",
            title:"نام دفتر",
            isFilterable: true,
            cell: (row) => (
                <Link
                    href={`/admins/agencies/jkh-${row.id}`}
                >
                    <a>{row.name}</a>
                </Link>
            ),
            isSortable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "manager",
            title: "نام مدیریت",
            isSortable: true,
            isFilterable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "state_name",
            title: "استان",
            isSortable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "city_name",
            title: "شهر",
            isSortable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "status_name",
            title: "وضعیت",
            isSortable: true,
            isFilterable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "button",
            title:"عملیات",
            cell: (row) => (
                <>
                    <Link href={`/admins/agencies/jkh-${row.id}`}>
                        <Button 
                            className="btn-sm"
                            variant="outline-indigo"
                        >
                            جزییات
                        </Button>
                    </Link>
                    <Button
                        className="btn-sm ms-2 me-2 delOpt"
                        variant="outline-warning"
                        onClick={(e)=>{
                            props.blckAgc(row.id)
                        }}
                    >
                        {row.status == 3 ? "فعال سازی" : "مسدود سازی"}
                    </Button>
                    <Button
                        className="btn-sm delOpt"
                        variant="outline-danger"
                        onClick={(e)=>{
                            props.deleteAgc(row.id)
                        }}
                    >
                        حذف
                    </Button>
                </>
            ),
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        }
    ]
}

export const OperatorAgenciesColumn = (props)=>{
    return [
        {
            prop: "name",
            title:"نام دفتر",
            isFilterable: true,
            cell: (row) => (
                <Link
                    href={`/admins/operators/agencies/jkh-${row.id}`}
                >
                    <a>{row.name}</a>
                </Link>
            ),
            isSortable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "manager",
            title: "نام مدیریت",
            isSortable: true,
            isFilterable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "state_name",
            title: "استان",
            isSortable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "city_name",
            title: "شهر",
            isSortable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "status_name",
            title: "وضعیت",
            isSortable: true,
            isFilterable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "button",
            title:"عملیات",
            cell: (row) => (
                <>
                    <Link href={`/admins/operators/agencies/jkh-${row.id}`}>
                        <Button 
                            className="btn-sm"
                            variant="outline-indigo"
                        >
                            جزییات
                        </Button>
                    </Link>
                    {props.hasAccess && (
                        <>
                        <Button
                            className="btn-sm ms-2 me-2 delOpt"
                            variant="outline-warning"
                            onClick={(e)=>{
                                props.blckAgc(row.id)
                            }}
                        >
                            {row.status == 3 ? "فعال سازی" : "مسدود سازی"}
                        </Button>
                        <Button
                            className="btn-sm delOpt"
                            variant="outline-danger"
                            onClick={(e)=>{
                                props.deleteAgc(row.id)
                            }}
                        >
                            حذف
                        </Button>
                        </>
                    )}
                </>
            ),
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        }
    ]
}

export const AdminAdvisorsColumn = (props)=>{
    return [
        {
            prop: "full_name",
            title:"نام مشاور",
            isFilterable: true,
            cell: (row) => (
                <Link
                    href={`/admins/advisors/jkh-${row.id}`}
                >
                    <a>{row.full_name}</a>
                </Link>
            ),
            isSortable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "agency_id",
            title: "نوع فعالیت",
            isSortable: true,
            isFilterable: true,
            cell: (row) => (
                <>{row.agency_id != null ? 'دفتر املاک' : 'مستقل'}</>
            ),
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "agency_name",
            title: "دفتر املاک",
            isSortable: true,
            isFilterable: true,
            cell: (row) => (
                <>{row.agency_name != null ? row.agency_name : '-'}</>
            ),
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "state_name",
            title: "استان",
            isSortable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "city_name",
            title: "شهر",
            isSortable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "status_name",
            title: "وضعیت",
            isSortable: true,
            isFilterable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "button",
            title:"عملیات",
            cell: (row) => (
                <>
                    <Link href={`/admins/advisors/jkh-${row.id}`}>
                        <Button 
                            className="btn-sm"
                            variant="outline-indigo"
                        >
                            جزییات
                        </Button>
                    </Link>
                    <Button
                        className="btn-sm ms-2 me-2 delOpt"
                        variant="outline-warning"
                        onClick={(e)=>{
                            props.blckAdv(row.id)
                        }}
                    >
                        {row.status == 3 ? "فعال سازی" : "مسدود سازی"}
                    </Button>
                    <Button
                        className="btn-sm delOpt"
                        variant="outline-danger"
                        onClick={(e)=>{
                            props.deleteAdv(row.id)
                        }}
                    >
                        حذف
                    </Button>
                </>
            ),
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        }
    ]
}

export const OperatorAdvisorsColumn = (props)=>{
    return [
        {
            prop: "full_name",
            title:"نام مشاور",
            isFilterable: true,
            cell: (row) => (
                <Link
                    href={`/admins/operators/advisors/jkh-${row.id}`}
                >
                    <a>{row.full_name}</a>
                </Link>
            ),
            isSortable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "agency_id",
            title: "نوع فعالیت",
            isSortable: true,
            isFilterable: true,
            cell: (row) => (
                <>{row.agency_id != null ? 'دفتر املاک' : 'مستقل'}</>
            ),
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "agency_name",
            title: "دفتر املاک",
            isSortable: true,
            isFilterable: true,
            cell: (row) => (
                <>{row.agency_name != null ? row.agency_name : '-'}</>
            ),
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "state_name",
            title: "استان",
            isSortable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "city_name",
            title: "شهر",
            isSortable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "status_name",
            title: "وضعیت",
            isSortable: true,
            isFilterable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "button",
            title:"عملیات",
            cell: (row) => (
                <>
                    <Link href={`/admins/operators/advisors/jkh-${row.id}`}>
                        <Button 
                            className="btn-sm"
                            variant="outline-indigo"
                        >
                            جزییات
                        </Button>
                    </Link>
                    {props.hasAccess &&(
                        <>
                            <Button
                                className="btn-sm ms-2 me-2 delOpt"
                                variant="outline-warning"
                                onClick={(e)=>{
                                    props.blckAdv(row.id)
                                }}
                            >
                                {row.status == 3 ? "فعال سازی" : "مسدود سازی"}
                            </Button>
                            <Button
                                className="btn-sm delOpt"
                                variant="outline-danger"
                                onClick={(e)=>{
                                    props.deleteAdv(row.id)
                                }}
                            >
                                حذف
                            </Button>
                        </>
                    )}
                </>
            ),
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        }
    ]
}

export const AdminMentorsColumn = (props)=>{
    return [
        {
            prop: "full_name",
            title:"نام منتور",
            isFilterable: true,
            cell: (row) => (
                <Link
                    href={`/admins/mentors/jkh-${row.id}`}
                >
                    <a>{row.full_name}</a>
                </Link>
            ),
            isSortable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "phone",
            title: "تلفن",
            isFilterable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "state_name",
            title: "استان",
            isSortable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "city_name",
            title: "شهر",
            isSortable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "status_name",
            title: "وضعیت",
            isSortable: true,
            isFilterable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "button",
            title:"عملیات",
            cell: (row) => (
                <>
                    <Link href={`/admins/mentors/jkh-${row.id}`}>
                        <Button 
                            className="btn-sm"
                            variant="outline-indigo"
                        >
                            جزییات
                        </Button>
                    </Link>
                    <Button
                        className="btn-sm ms-2 me-2 delOpt"
                        variant="outline-warning"
                        onClick={(e)=>{
                            props.blckMent(row.id)
                        }}
                    >
                        {row.status == 3 ? "فعال سازی" : "مسدود سازی"}
                    </Button>
                    <Button
                        className="btn-sm delOpt"
                        variant="outline-danger"
                        onClick={(e)=>{
                            props.deleteMent(row.id)
                        }}
                    >
                        حذف
                    </Button>
                </>
            ),
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        }
    ]
}

export const OperatorMentorsColumn = (props)=>{
    return [
        {
            prop: "full_name",
            title:"نام منتور",
            isFilterable: true,
            cell: (row) => (
                <Link
                    href={`/admins/operators/mentors/jkh-${row.id}`}
                >
                    <a>{row.full_name}</a>
                </Link>
            ),
            isSortable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "phone",
            title: "تلفن",
            isFilterable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "state_name",
            title: "استان",
            isSortable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "city_name",
            title: "شهر",
            isSortable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "status_name",
            title: "وضعیت",
            isSortable: true,
            isFilterable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "button",
            title:"عملیات",
            cell: (row) => (
                <>
                    <Link href={`/admins/operators/mentors/jkh-${row.id}`}>
                        <Button 
                            className="btn-sm"
                            variant="outline-indigo"
                        >
                            جزییات
                        </Button>
                    </Link>
                    {props.hasAccess && (
                        <>
                            <Button
                                className="btn-sm ms-2 me-2 delOpt"
                                variant="outline-warning"
                                onClick={(e)=>{
                                    props.blckMent(row.id)
                                }}
                            >
                                {row.status == 3 ? "فعال سازی" : "مسدود سازی"}
                            </Button>
                            <Button
                                className="btn-sm delOpt"
                                variant="outline-danger"
                                onClick={(e)=>{
                                    props.deleteMent(row.id)
                                }}
                            >
                                حذف
                            </Button>
                        </>
                    )}
                </>
            ),
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        }
    ]
}

export const AdminExpertsColumn = (props)=>{
    return [
        {
            prop: "full_name",
            title:"نام کارشناس",
            isFilterable: true,
            cell: (row) => (
                <Link
                    href={`/admins/experts/jkh-${row.id}`}
                >
                    <a>{row.full_name}</a>
                </Link>
            ),
            isSortable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "type_name",
            title: "نوع",
            isFilterable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "phone",
            title: "تلفن",
            isFilterable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "state_name",
            title: "استان",
            isSortable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "city_name",
            title: "شهر",
            isSortable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "status_name",
            title: "وضعیت",
            isSortable: true,
            isFilterable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "button",
            title:"عملیات",
            cell: (row) => (
                <>
                    <Link href={`/admins/experts/jkh-${row.id}`}>
                        <Button 
                            className="btn-sm"
                            variant="outline-indigo"
                        >
                            جزییات
                        </Button>
                    </Link>
                    <Button
                        className="btn-sm ms-2 me-2 delOpt"
                        variant="outline-warning"
                        onClick={(e)=>{
                            props.blckExp(row.id)
                        }}
                    >
                        {row.status == 3 ? "فعال سازی" : "مسدود سازی"}
                    </Button>
                    <Button
                        className="btn-sm delOpt"
                        variant="outline-danger"
                        onClick={(e)=>{
                            props.deleteExp(row.id)
                        }}
                    >
                        حذف
                    </Button>
                </>
            ),
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        }
    ]
}

export const OpertorExpertsColumn = (props)=>{
    return [
        {
            prop: "full_name",
            title:"نام کارشناس",
            isFilterable: true,
            cell: (row) => (
                <Link
                    href={`/admins/operators/experts/jkh-${row.id}`}
                >
                    <a>{row.full_name}</a>
                </Link>
            ),
            isSortable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "type_name",
            title: "نوع",
            isFilterable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "phone",
            title: "تلفن",
            isFilterable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "state_name",
            title: "استان",
            isSortable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "city_name",
            title: "شهر",
            isSortable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "status_name",
            title: "وضعیت",
            isSortable: true,
            isFilterable: true,
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        },
        {
            prop: "button",
            title:"عملیات",
            cell: (row) => (
                <>
                    <Link href={`/admins/operators/experts/jkh-${row.id}`}>
                        <Button 
                            className="btn-sm"
                            variant="outline-indigo"
                        >
                            جزییات
                        </Button>
                    </Link>
                    {props.hasAccess && (
                        <>
                            <Button
                                className="btn-sm ms-2 me-2 delOpt"
                                variant="outline-warning"
                                onClick={(e)=>{
                                    props.blckExp(row.id)
                                }}
                            >
                                {row.status == 3 ? "فعال سازی" : "مسدود سازی"}
                            </Button>
                            <Button
                                className="btn-sm delOpt"
                                variant="outline-danger"
                                onClick={(e)=>{
                                    props.deleteExp(row.id)
                                }}
                            >
                                حذف
                            </Button>
                        </>
                    )}
                </>
            ),
            alignment:{horizontal:'center'},
            cellProps:{className:'align-middle text-center'}
        }
    ]
}