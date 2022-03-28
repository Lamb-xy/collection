import courseApi from '../../../api/courses/course_information.js'
import courseCommentApi from '../../../api/courses/course_comment.js'
import courseReportApi from '../../../api/courses/course_report.js'
import courseQaApi from '../../../api/courses/course_qa.js'

const state = {
    course_information: {teacher:{
        teacher_info:{}
    }},
    course_labs: [{}],
    course_content_nav: 'experiment_list',
    course_discuss_nav: 'comment',
    course_id: 0,
    page_args_type: {
        'comment': 'course_comment_args',
        'report': 'course_report_args',
        'qa': 'course_qa_args'
    },
    page_action_type: {
        'comment': 'change_comment_information',
        'report': 'change_report_information',
        'qa': 'change_qa_information'
    },
    course_comment_information: {},
    course_comment_args: {
        page_size: 15,
        topic_id: 0,
        topic_type: 'course'
    },
    report_information: {},
    course_report_args: {
        course_id: 0,
        lab_id: 0,
        page_size: 16,
    },
    qa_information: {},
    course_qa_args: {
        page_size: 10,
        total_page: 1,
        current_page: 1
    },

    course_userstatus: [{}],
    comments_userstatus: {0:0},
    reply_id: 0,
    text_placeholder: "请输入您想说的话..."

}

const getters = {
    showing_page_info: state => {
        let store = state[state.page_args_type[state.course_discuss_nav]]

        let p = []
        for (var i = 1; i <= store.total_page; i++) {
            p.push(i)
            if (i === 2) {
                p.push('...')
            } else if (i === store.total_page - 2) {
                p.push('... ')
            }
        }
        return p
    }
}

const mutations = {
    change_course_information (state, courseInformation) {
        state.course_information = courseInformation
    },

    change_course_labs (state, courseLabs) {
        state.course_labs = courseLabs
    },

    change_content_nav (state, contentNav) {
        state.course_content_nav = contentNav
    },

    change_discuss_nav (state, discussNav) {
        state.course_discuss_nav = discussNav
    },

    change_current_page (state, pageNumber) {
        state[state.page_args_type[state.course_discuss_nav]].current_page = pageNumber
        // state.course_comment_args.current_page = pageNumber
    },

    change_comment_information (state, commentInformation) {
        state.course_comment_information = commentInformation
        state.course_comment_args.total_page = Math.ceil(commentInformation.total_comments / commentInformation.page_size)
    },

    change_course_id (state, courseId) {
        state.course_id = courseId
    },

    change_report_information (state, reportInformation) {
        state.report_information = reportInformation
        state.course_report_args.total_page = Math.ceil(reportInformation.report_number / reportInformation.page_size)
    },

    change_report_args (state, reportArgs) {
        state.course_report_args[reportArgs.key] = reportArgs.value
    },

    change_qa_information (state, qaInformation) {
        state.qa_information = qaInformation
        state.course_qa_args.total_page = Math.ceil(qaInformation.qa_number / qaInformation.page_size)
    },

    change_qa_args (state, qaArgs) {
        state.course_report_args[qaArgs.key] = qaArgs.value
    },

    change_course_userstatus (state, courseUserstatus) {
        state.course_userstatus = courseUserstatus
    },

    change_follow (state, isFollow) {
        state.course_userstatus[0].is_followed = isFollow
    },

    add_comment (state, comment) {
        // post_comment insert it on current page.
        state.course_comment_information.results.unshift(comment)
    },

    change_comments_userstatus (state, commentsUserstatus) {
        state.comments_userstatus = commentsUserstatus
    },

    change_reply_id (state, id) {
        state.reply_id = id
    },

    change_text_placeholder (state, text) {
        state.text_placeholder = text
    }

}

const actions = {
    get_and_change_course_information (context, courseId) {
        courseApi.get_course_labs(courseId).then((response) => {
            context.commit('change_course_labs', response.data)
        })
        // couseApi.get_course_labs(courseId).then((response) => {
        // })

        // console.log(333)

        courseApi.get_course_information(courseId).then(function (courseInfo) {
            context.commit('change_current_page', 1)
            context.commit('change_course_information', courseInfo.data)
            context.commit('change_course_id', courseId)
        })


    },

    change_content_nav (context, contentNav) {
        context.commit('change_content_nav', contentNav)
    },

    change_discuss_nav (context, discussNav) {
        context.commit('change_discuss_nav', discussNav)
    },

    change_comment_information (context, commentArgs) {
        // let courseCommentsInfo = courseCommentApi.get_course_comments(commentArgs)
        courseCommentApi.get_course_comments(commentArgs).then((response) => {
            context.commit('change_comment_information', response.data)
        })
    },

    change_report_information (context, reportArgs) {
        // let courseReportInfo = courseReportApi.get_report(reportArgs)
        courseReportApi.get_report(reportArgs).then((response) => {
            context.commit('change_report_information', response.data)
        })
    },

    change_report_args (context, reportArgs) {
        context.commit('change_report_args', reportArgs)
    },

    change_qa_information (context, qaArgs) {
        // let courseQaInfo = courseQaApi.get_qa(qaArgs)
        courseQaApi.get_qa(qaArgs).then((response) => {
            context.commit('change_qa_information', response.data)
        })
    },

    change_qa_args (context, qaArgs) {
        context.commit('change_qa_args', qaArgs)
    },

    change_current_page ({ dispatch, commit, state }, pageArgs) {
        // pageType:
        // change_comment_information
        // change_report_information
        // change_QA_information
        let pageNumber = pageArgs.pageNumber
        let pageType = pageArgs.pageType
        let totalPage = state[state.page_args_type[pageType]].total_page

        if (pageNumber < 1 ||
            pageNumber > totalPage ||
            pageNumber === '...' ||
            pageNumber === '... ') {
            return
        }

        let args = Object.assign({}, state[state.page_args_type[pageType]])
        args['current_page'] += 1
        args['course_id'] = state.course_id

        dispatch(state.page_action_type[pageType], args)
        // {
        //     'course_id': state.course_id,
        //     'page': pageNumber,
        //     'page_size': state.page_size
        // }
        commit('change_current_page', pageNumber)
    },

    change_course_userstatus (context, query) {
        courseApi.get_course_userstatus(query).then((response) => {
            context.commit('change_course_userstatus', response.data)
        })
    },

    change_follow (context, query) {
        if (query.is_follow === true) {
            courseApi.follow(query).then((response)=> {
                // # TODO
                // error tip.
                if (response.status === 200 || response.status === 204) {
                    context.commit('change_follow', true)
                }
            })
        } else {
            courseApi.unfollow(query).then((response)=> {
                // # TODO
                // error tip.
                if (response.status === 200 || response.status === 204) {
                    context.commit('change_follow', false)
                }
            })
        }
    },

    join_course (context, query) {
        let id = query.id
        courseApi.join_course(query).then((response) => {
            // # TODO
            // error tip
            if (response.status === 204) {
                window.location = 'http://www.shiyanlou.com/courses/' + id + '/learning/'
            }
        })
    },

    post_comment (context, query) {
        courseCommentApi.post_comment(query).then((response) => {
            context.commit('add_comment', response.data)
        })
    },

    change_comments_userstatus (context, query) {
        // query
        // comment_ids=1,2,3,4
        // 这里对返回值做一下调整, 返回值是 [{state}, {}, {}...]
        // 这里要调整为
        // {1:{state},
        //  2:{}}
        // 
        courseCommentApi.get_comments_userstatus(query).then((response) => {
            let newData = {}
            let comment_ids = query['comment_ids'].split(',')
            for (var i = comment_ids.length - 1; i >= 0; i--) {
                newData[comment_ids[i]] = response.data[i]
            }
            context.commit('change_comments_userstatus', newData)
        })
    },

    delete_comment (context, query) {
        courseCommentApi.delete_comment(query).then(() => {
            // # TODO
            // error tip
            context.dispatch('change_comment_information', {
                'topic_id': context.state.course_id,
                'page_size': 15,
                'topic_type': 'course'
            })
        })
    },

    change_reply_id (context, id) {
        context.commit('change_reply_id', id)
    },

    change_text_placeholder (context, text) {
        context.commit('change_text_placeholder', text)
    },

    reply_comment (context, query) {
        // console.log(1)
        courseCommentApi.reply_comment(query).then((response) => {
            context.commit('add_comment', response.data)
            context.commit('change_reply_id', 0)
            context.commit('change_text_placeholder', '请输入您想说的话...')
        })
    }

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
