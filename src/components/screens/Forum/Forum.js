import React, { Component } from 'react'
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import CustomText from '../../common/Text/Text'
import Category from './Category/Category'
import Message from './Message/Message'
import Topic from './Topic/Topic'
import * as FORUM from '../../../store/actions/forum'
import { getToken } from '../../../utils/token'
import commonStyles from '../../../styles/common'
import { BLACK_COLOR, GREY_COLOR, GREEN_COLOR } from '../../../styles/stylesConstants'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    list: {
        width: '90%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    subList: {
        width: '90%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    floatingButtonLeft: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: 50,
        height: 50,
        left: 20,
        bottom: 20
    },
    floatingButtonRight: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: 50,
        height: 50,
        right: 20,
        bottom: 20
    },
    floatLeftCenter: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: 50,
        height: 50,
        left: 80,
        bottom: 20
    }
})

class Forum extends Component {
    state = {
        categories: [],
        messages: [],
        topics: [],
        categorySelected: false,
        topicSelected: false,
        parentId: '',
        parentType: ''
    }

    async componentDidMount() {
        this.token = await getToken()
        this.getCategories()
    }

    onTopicSelectHandler = id => this.props.getMessages(this.token, id)
        .then(messages => this.setState({ messages, parentId: id, parentType: 'TOPIC', topicSelected: true }))

    getCategories = () => this.props.getCategories(this.token)
        .then(categories => this.setState({ categories }))

    onCategorieSelectHandler = id => this.props.getCategorie(this.token, id)
        .then(({ subCategories, subTopics }) => this.setState({
            categories: subCategories,
            topics: subTopics,
            categorySelected: true,
            topicSelected: false,
            parentId: id,
            parentType: 'CATEGORY'
        }))


    _goBackCategory = () => {
        return this.props.getCategorieData(this.token, this.state.parentId)
            .then(category => {
                if (!category.parentId) {
                    return this.setState({
                        categories: [],
                        messages: [],
                        topics: [],
                        categorySelected: false,
                        topicSelected: false,
                        parentId: '',
                        parentType: ''
                    }, () => this.getCategories())
                }

                this.setState({ parentId: category.parentId, topicSelected: false }, () => {
                    this.onCategorieSelectHandler(this.state.parentId)
                })
            })
    }

    _goBackTopic = () => {
        return this.props.getTopicData(this.token, this.state.parentId)
            .then(topic => {
                this.setState({ parentId: topic.categoryId, topicSelected: false }, () => {
                    this.onCategorieSelectHandler(this.state.parentId)
                })
            })
    }

    goBackForumHandler = () => {
        if (!this.state.parentId || this.state.parentType == '') return
        if (this.state.parentType == 'CATEGORY') return this._goBackCategory()
        if (this.state.parentType == 'TOPIC') return this._goBackTopic()
    }

    onTopicDeleteHandler = id => this.props.deleteTopic(this.token, id)
        .then(() => this.onCategorieSelectHandler(this.state.parentId))
    onMessageDeleteHandler = id => this.props.deleteMessage(this.token, id)
        .then(message => this.onTopicSelectHandler(message.topicId))

    render() {
        const topicSelected = (
            <View style={styles.subList}>
                <FlatList
                    ListHeaderComponent={() => <CustomText>MESSAGES</CustomText>}
                    ListHeaderComponentStyle={{ justifyContent: 'center', alignItems: 'center' }}
                    style={[commonStyles.max]}
                    data={this.state.messages.map(message => ({
                        key: message.id,
                        ...message
                    }))}
                    renderItem={({ item }) => <Message
                        message={item.message}
                        onDelete={() => this.onMessageDeleteHandler(item.id)} />}
                />
            </View>
        )

        const categorySelected = (
            <>
                <View style={styles.subList}>
                    <FlatList
                        ListHeaderComponent={() => <CustomText>CATEGORIES</CustomText>}
                        ListHeaderComponentStyle={{ justifyContent: 'center', alignItems: 'center' }}
                        style={[commonStyles.max]}
                        data={this.state.categories.map(category => ({
                            key: category.id,
                            ...category
                        }))}
                        renderItem={({ item }) => <Category
                            title={item.title}
                            onPress={() => this.onCategorieSelectHandler(item.id)} />}
                    />
                </View>
                <View style={styles.subList}>
                    <FlatList
                        ListHeaderComponent={() => <CustomText>TOPICS</CustomText>}
                        ListHeaderComponentStyle={{ justifyContent: 'center', alignItems: 'center' }}
                        style={[commonStyles.max]}
                        data={this.state.topics.map(topic => ({
                            key: topic.id,
                            ...topic
                        }))}
                        renderItem={({ item }) => <Topic
                            title={item.title} content={item.content}
                            onPress={() => this.onTopicSelectHandler(item.id)}
                            onDelete={() => this.onTopicDeleteHandler(item.id)}
                        />}
                    />
                </View>

            </>
        )

        return (
            <View style={styles.container}>
                <View style={styles.list}>
                    {!this.state.categorySelected && !this.state.topicSelected ? <FlatList
                        ListHeaderComponent={() => <CustomText>CATEGORIES</CustomText>}
                        ListHeaderComponentStyle={{ justifyContent: 'center', alignItems: 'center' }}
                        style={[commonStyles.max]}
                        data={this.state.categories.map(category => ({
                            key: category.id,
                            ...category
                        }))}
                        renderItem={({ item }) => <Category title={item.title} onPress={() => this.onCategorieSelectHandler(item.id)} />}
                    /> : this.state.topicSelected ? topicSelected : categorySelected}
                </View>
                {this.state.parentId ? <TouchableOpacity style={[styles.floatingButtonLeft]} onPress={this.goBackForumHandler}>
                    <Icon name='arrow-circle-left' size={50} />
                </TouchableOpacity> : null}
                {!this.state.topicSelected ? <TouchableOpacity style={[styles.floatLeftCenter]} onPress={this.goBackForumHandler}>
                    <Icon name='plus-circle' color={GREY_COLOR} size={50} />
                </TouchableOpacity> : null}
                {this.state.parentId && !this.state.topicSelected ? <TouchableOpacity style={[styles.floatLeftCenter, { left: 140 }]} onPress={this.goBackForumHandler}>
                    <Icon name='plus-circle' color={GREEN_COLOR} size={50} />
                </TouchableOpacity> : null}
                {this.state.topicSelected ? <TouchableOpacity style={[styles.floatLeftCenter, { left: 200 }]} onPress={this.goBackForumHandler}>
                    <Icon name='plus-circle' color={BLACK_COLOR} size={50} />
                </TouchableOpacity> : null}
            </View>
        )
    }
}

const mapStateToProps = reducers => ({})

const mapDispatchToProps = dispatch => ({
    getCategories: token => dispatch(FORUM.getCategories(token)),
    getCategorie: (token, id) => dispatch(FORUM.getCategorie(token, id)),
    getMessages: (token, topicId) => dispatch(FORUM.getMessages(token, topicId)),
    getCategorieData: (token, id) => dispatch(FORUM.getCategorieData(token, id)),
    getTopicData: (token, id) => dispatch(FORUM.getTopicData(token, id)),
    deleteTopic: (token, id) => dispatch(FORUM.deleteTopic(token, id)),
    deleteMessage: (token, id) => dispatch(FORUM.deleteMessage(token, id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withNavigation(Forum));