import React, { Component } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

import CustomText from '../../common/Text/Text'
import Category from './Category/Category'
import Topic from './Topic/Topic'
import * as FORUM from '../../../store/actions/forum'
import { getToken } from '../../../utils/token'
import commonStyles from '../../../styles/common'
import { BLACK_COLOR } from '../../../styles/stylesConstants'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    list: {
        width: '90%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    subList: {
        width: '90%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

class Forum extends Component {
    state = {
        categories: [],
        messages: [],
        subCategories: [],
        subTopics: [],
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
        .then(messages => this.setState({ messages, parentId: id, parentType: 'TOPIC' }))

    getCategories = () => this.props.getCategories(this.token)
        .then(categories => this.setState({ categories }))

    onCategorieSelectHandler = id => this.props.getCategorie(this.token, id)
        .then(({ subCategories, subTopics }) => this.setState({ subCategories, subTopics, categorySelected: true, parentId: id, parentType: 'CATEGORY' }, () => console.log(this.state.subTopics)))

    render() {
        const topicSelected = (
            <View style={styles.subList}>
                <FlatList
                    ListHeaderComponent={() => <CustomText>CATEGORIES</CustomText>}
                    ListHeaderComponentStyle={{ justifyContent: 'center', alignItems: 'center' }}
                    style={[commonStyles.max]}
                    data={this.state.subCategories.map(category => ({
                        key: category.id,
                        ...category
                    }))}
                    renderItem={({ item }) => <Category title={item.title} onPress={() => this.onCategorieSelectHandler(item.id)} />}
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
                        data={this.state.subCategories.map(category => ({
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
                        data={this.state.subTopics.map(topic => ({
                            key: topic.id,
                            ...topic
                        }))}
                        renderItem={({ item }) => <Topic
                            title={item.title} content={item.content}
                            onPress={() => this.onCategorieSelectHandler(item.id)}
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
            </View>
        )
    }
}

const mapStateToProps = reducers => ({})

const mapDispatchToProps = dispatch => ({
    getCategories: token => dispatch(FORUM.getCategories(token)),
    getCategorie: (token, id) => dispatch(FORUM.getCategorie(token, id)),
    getMessages: (token, topicId) => dispatch(FORUM.getMessages(token, topicId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withNavigation(Forum));